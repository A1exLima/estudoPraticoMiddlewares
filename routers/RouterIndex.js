// Requizicao do modulo NPM Express
const express = require('express');

// Confiuracao do modulo express para chamar a função como router
const router = express.Router();

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Rota para página HOME
router.get('/', IndexController.index);

// Exportando o index router para ser usado no Indexcontroller
module.exports = router; 