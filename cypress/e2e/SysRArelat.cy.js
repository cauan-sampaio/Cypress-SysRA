/// <reference types="cypress"/>
import LoginPage from '../support/page-objects/loginpage.cy.js';
describe('Login no SysRA e gerar relatório de GRU ', () => {
    beforeEach(() => {
        cy.visit('https://sysra-h.maracanau.ifce.edu.br/login')
        function pressKeyMultipleTimes(keyCode, times) {
            cy.get('body').type(new Array(times).fill(keyCode).join('')).type('{enter}')
        }
    });
        it('Logando na página inicial, gerando relatório de GRU', () => {
            cy.viewport(2080, 1368)
            const ln = new LoginPage(); 
            ln.setmatricula()
            ln.setsenha()  
            cy.get('.w-100').click() 
            cy.get(':nth-child(4) > .sc-ezWXYA').click()
            cy.wait(2000)
            cy.get('[href="/relatorios/relatorios-gru"]').click()
            cy.wait(2000)
            cy.get('.select__control').click()
            cy.wait(2000)
            cy.get('body').type('{enter}')
            cy.screenshot()
            cy.get(':nth-child(1) > .sc-crXcEl > .form-control').click().type('88')
            cy.get(':nth-child(2) > .sc-crXcEl > .form-control').click().type('88')
            cy.screenshot()
            cy.wait(5000)
        });

    });
  