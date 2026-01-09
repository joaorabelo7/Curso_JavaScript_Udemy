const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


// Rota GET
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index); 
route.post('/login/register', loginController.register);

module.exports = route;
