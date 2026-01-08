const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const { middlewareGlobal } = require('./src/middlewares/middleware');

// Rota GET
route.get('/', homeController.paginaInicial);

// Rota POST com middleware
route.post(
  '/',
  middlewareGlobal,
  homeController.trataPost
);

module.exports = route;
