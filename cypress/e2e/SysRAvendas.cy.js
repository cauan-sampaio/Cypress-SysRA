/// <reference types="cypress"/>
const data = require('../fixtures/usuario.json')
const LoginPage = require('../support/page-objects/loginpage.cy.js')

describe('Login no SysRA e teste de operador ', () => {
        before(() => {
            cy.viewport(2080, 1368)
            cy.visit('https://sysra-h.maracanau.ifce.edu.br/login')
            function pressKeyMultipleTimes(keyCode, times) {
                cy.get('body').type(new Array(times).fill(keyCode).join('')).type('{enter}')
            }
            LoginPage(data.matricula, data.senha)
        });
   




        it('Então ele vai para a aba de vendas', () => {
        cy.get(':nth-child(2) > .sc-ezWXYA').click()
        cy.get('[href="/vendas/vendas-operador"]').click()
        cy.get(':nth-child(1) > .sc-crXcEl > .form-control').click()
        cy.get(':nth-child(3) > .sc-crXcEl > .form-control').click()
        cy.get('.sc-jKzugg > .sc-cCsOjp > .btn').click()

    });
});