const path = require('path');

const controlador = {
    index: function(req,res){
        res.render('index');
    },
    login: function(req,res){
        res.render('login');
    },
    register: function(req,res){
        res.render('register');
    },
    display_flex: function(req,res){
        res.render('display_flex');
    }
}

// exporto el módulo
module.exports = controlador;