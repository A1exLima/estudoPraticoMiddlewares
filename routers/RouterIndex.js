// Requizicao do modulo NPM Express
const express = require('express');

// Requisao do Middleware para captura da data e hora de acesso da rota home
const registroRotaHome = require('../middlewares/logRotaHome');

// Requisicao do express-validator destruturacao do body
const { body } = require('express-validator');

// Variavel do tipo array para validacao de cada campo do body como funcao do express-validator
const validacoes = [
    body("nomeCompleto").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("senha").notEmpty().isString()
];


// Confiuracao do modulo express para chamar a função como router
const router = express.Router();

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Rota para página HOME
// Segundo parametro para chamar o middleware de rota registro Home
router.get('/', registroRotaHome, IndexController.index);
// Rota para página HOME
router.get('/produtos', IndexController.produtos);
// Rota para página HOME
router.get('/contato', IndexController.contato);

//-----------------------------------------------------//
// Rota para página HOME
router.get('/minhaConta', IndexController.minhaConta);


router.post('/minhaConta', validacoes, IndexController.processingData);




//-----------------------------------------------------//

// Rota para página HOME
router.get('/cadastro', IndexController.cadastro);

// Exportando o index router para ser usado no Indexcontroller
module.exports = router; 

