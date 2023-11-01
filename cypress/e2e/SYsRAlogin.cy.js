/// <reference types="cypress"/>
import { timeInterval } from 'rxjs';
const {LoginPage} = require('../support/page-objects/index.js')
const data = require('../fixtures/usuario.json')
import { Key } from 'sshpk';

describe('SysRA Login e etc', () => {
    function pressKeyMultipleTimes(keyCode, times) {
        cy.get('body').type(new Array(times).fill(keyCode).join('')).type('{enter}')
    }
    it.only('Inserindo dados do SysRA para entrar na página inicial, depois  cadastrar usuários', () => {
    cy.viewport(1368, 1080)
    cy.visit('https://sysra-h.maracanau.ifce.edu.br/login')
    cy.LoginPage(data.matricula, data.senha)
    cy.get(':nth-child(5) > .sc-ezWXYA').click()
    cy.get('[href="/administracao/usuarios"]').click()
    cy.get('a > .sc-cCsOjp > .btn > span').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .sc-crXcEl > .form-control').click().type('Oi5').should('have.value', 'Oi5' )

    cy.get(':nth-child(3) > .sc-crXcEl > .form-control').click().type('cauansampaio288@gmail.com').should('have.value', 'cauansampaio288@gmail.com')
    cy.get('.sc-jTYCaT > .sc-cCsOjp > .btn').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .sc-himrzO > .css-b62m3t-container > .select__control').click()
    cy.get('body').type('{enter}')
    cy.wait(1000)
    cy.get(':nth-child(3) > .sc-himrzO > .css-b62m3t-container > .select__control').click()
    cy.get('body').type('{enter}')
    cy.wait(1000)
    cy.get('.modal-footer > :nth-child(1) > .btn').click()
    cy.get('.sc-jTYCaT > .sc-cCsOjp > .btn').click()
    cy.get(':nth-child(2) > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container').click().then((xhr) =>{
        cy.log('XHR Response:', xhr)
        expect(xhr.status).to.equal(400)
    })
    cy.wait(5000)
    cy.get('.modal-footer > :nth-child(1) > .btn').click()
    
    })
    it('Loga no SysRA e cadastrar preparações, bug encontrado', () => {
    cy.viewport(2080, 1368)
    cy.visit('https://sysra-h.maracanau.ifce.edu.br/login')
    const ln = new LoginPage(); 
    ln.setmatricula()
    ln.setsenha()
    cy.get('.w-100').click() 
    cy.get(':nth-child(5) > .sc-ezWXYA').click()
    cy.get('[href="/administracao/preparacoes"]').click()
    cy.get('a > .btn').click()
    cy.get('.col-xxl-5 > .sc-crXcEl > .form-control').click().type('linguiça').should('have.value', 'linguiça')
    cy.get('.col-xxl-3 > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container').click() 
    cy.get('body').type('{enter}')
    cy.get('.col-xxl-3 > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container').should('have.value', '')
    cy.get(':nth-child(3) > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container').click()
    cy.get('body').type('{enter}')
    cy.get(':nth-child(4) > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container').click()
    pressKeyMultipleTimes('{downarrow}', 1)
    cy.get('.col-xxl-5 > .sc-himrzO > .css-b62m3t-container > .select__control > .select__value-container > .select__input-container').click().type('porco')
    cy.wait(2000)
    cy.get('body').type('{enter}')
    cy.get(':nth-child(3) > .sc-crXcEl > .form-control').click().type('67').should('have.value', '67')
    cy.wait(2000)
    cy.get('.sc-boKtkb > .btn').click()
    cy.get('.sc-cxalrY > :nth-child(2) > #add-preparacao-form').click()
    });
    
})
    

