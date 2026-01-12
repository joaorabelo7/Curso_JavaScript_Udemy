require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Conexão com MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

// Sessão e segurança
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

// Rotas e middlewares
const routes = require('./routes');
const {
  middlewareGlobal,
  outroMidlleware,
  checkCsrfError,
  csrfMidlleware
} = require('./src/middlewares/middleware');

// Helmet
app.use(helmet());

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Session
const sessionOptions = session({
  secret: 'adasdasdasdasdasdas',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// CSRF (SEMPRE depois da session)
app.use(csrf());

// Meus middlewares
app.use(checkCsrfError);
app.use(middlewareGlobal);
app.use(csrfMidlleware);
app.use(routes);

// Servidor
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
