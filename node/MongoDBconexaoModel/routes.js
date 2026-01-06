const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const meuMiddleware = require('./src/middlewares/middleware');

route.get('/', homeController.paginaInicial);

route.post('/', meuMiddleware, homeController.trataPost);

module.exports = route;
