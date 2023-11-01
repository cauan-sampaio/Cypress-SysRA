import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../page-objects/loginpage.cy.js';
const data = require('../../fixtures/usuario.json')
Given('Eu entro na página SysRA Login', () => {
    cy.viewport(2080, 1368)
    cy.visit("https://sysra-h.maracanau.ifce.edu.br/login")
});
When("Quando eu digitar as minhas credenciais", () => {
    const loginPage = new LoginPage()
    loginPage.login(data.matricula, data.senha)
})
Then("O usuário entrará no SysRA", () => {
    cy.url().should("eq", "https://sysra-h.maracanau.ifce.edu.br/")
    cy.get(':nth-child(4) > .sc-ezWXYA').click()
    cy.wait(2000)
    cy.get('[href="/relatorios/relatorios-gru"]').click()
})