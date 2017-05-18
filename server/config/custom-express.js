var express = require('express');

//Framework usado para centralizar todos os carregamentos de módulo
var consign = require('consign');

//Usado para recuperar os parametros enviados na requisição
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign().include('models').then('controllers').then('routes').into(app);

    return app;
}