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
    cadastro: (req, res) =>{
        res.render("cadastro.ejs");

    },

}

