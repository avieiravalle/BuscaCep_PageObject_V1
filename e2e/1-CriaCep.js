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

        browser.get('https://www.4devs.com.br/gerador_de_cep');

        criaCep.estado.click();
        browser.sleep(1000);
        criaCep.cidade.click();
        criaCep.BtnGer.click();
        browser.sleep(1000);
        
        browser.executeScript('window.scrollTo(0,' + 200 + ');').then(function () {
            browser.sleep(2000);

        });

        const cep1 = pesCep.cep;

    })

})