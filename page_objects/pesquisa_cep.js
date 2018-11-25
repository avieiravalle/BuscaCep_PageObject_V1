var PesCep = function () {}

PesCep.prototype = Object.create({}, {

    inserir: {get: function () { return element(by.id('q')) }},
    BtnCons: {get: function () { return element(by.id('btnConsultar')) }},
    cep: {get: function () { return element(by.id('cep')).getAttribute('value') }},

})

module.exports = PesCep