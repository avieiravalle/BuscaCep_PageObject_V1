var CriaCep = function () {}

CriaCep.prototype = Object.create({}, {

    estado: {get: function () { return $('#cep_estado').element(By.cssContainingText('option', 'SP')) }},
    cidade: {get: function () { return  $('#cep_cidade').element(By.cssContainingText('option', 'São Paulo')) }},
    BtnGer: {get: function () { return  element(by.id('btn_gerar_cep')) }}
})

module.exports = CriaCep