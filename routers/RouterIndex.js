// Requizicao do modulo NPM Express
const express = require('express');

// Confiuracao do modulo express para chamar a função como router
const router = express.Router();

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Rota para página HOME
router.get('/', IndexController.index);
// Rota para página HOME
router.get('/produtos', IndexController.produtos);
// Rota para página HOME
router.get('/contato', IndexController.contato);
// Rota para página HOME
router.get('/minhaConta', IndexController.minhaConta);
// Rota para página HOME
router.get('/cadastro', IndexController.cadastro);

// Exportando o index router para ser usado no Indexcontroller
module.exports = router; 

