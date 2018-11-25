var CriaCep = require('../page_objects/cria_cep');
var PesCep = require('../page_objects/pesquisa_cep');

describe('Should give value in var', () => {

    var criaCep;
    var pesCep;

    beforeEach(function () {

        criaCep = new CriaCep();
        pesCep = new PesCep();

    })

    it('Should sourche to cep', () => {
        const cep1 = pesCep.cep;

        browser.get('http://www.achecep.com.br/');

        browser.sleep(2000);
        pesCep.inserir.sendKeys(cep1);
        browser.sleep(2000);
        pesCep.BtnCons.click();
        browser.sleep(5000);
    })
})