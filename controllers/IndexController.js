// Requisicao do banco de Dados
const dadosUsuario = require("../database/dadosUsuario.json")

// Requisicao do modulo nativo file system
const fs = require('fs');

// Objeto Literal ja pronto para exportacao de todos os controllers
module.exports ={

    // PÁGINA HOME - ( IRÁ EXIBIR PARA O USUÁRIO TODOS OS MÉTODOS CRUD)

    // Redenrizacao da página Home
    index: (req, res) =>{
        res.render("index.ejs");
    },

    produtos: (req, res) =>{
        res.render("produtos.ejs");
    },

    contato: (req, res) =>{
        res.render("contato.ejs");

    },
    
    minhaConta: (req, res) =>{
        res.render("minhaConta.ejs");

    },

    processingData: (req, res) => {

        // Verifica se o req.file é false (undefined) se sim executar o código abaixo
        if (!req.file) {

            return res.send("Imagem Não Enviada!");
            
        } else {

            // Captura dos dados (NOME, E-MAIL E SENHA) enviados via Método Post através do req.body e salva em uma variavel
            let dados = req.body;

            // Inclui do nome do arquivo de imagem do usuário na variavel Dados
            dados.imagemUsuario = req.file.filename;

            // Inclusao do nome de usuario e senha da ultima posicao do array do banco de dados onde é guardado todos os usuarios e senhas
            dadosUsuario.push(dados);
    
            // conversao dos dados em tipo Json, e atraves da funcao nativa fs o salvamento desses dados dentro da database em formato json
            fs.writeFileSync('./database/dadosUsuario.json', JSON.stringify(dadosUsuario, null, 4));
    
            //Redirecionamento para a página de confirmacao do novo usuario e senha criada e exibicao de todos os usuarios e senhas para confirmacao
            res.send('CADASTRO EFETUADO COM SUCESSO');
        }

    },

    cadastro: (req, res) =>{
        res.render("cadastro.ejs");

    },

}

