import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../page-objects/loginpage.cy.js';
const data = require('../../fixtures/usuario.json')

Given('Dado que o usuário loge no SysRA', ()=>{
    cy.viewport(2080, 1368)
    cy.visit("https://sysra-h.maracanau.ifce.edu.br/login")
    const loginPage = new LoginPage()
    loginPage.login(data.matricula, data.senha)
})


When('O usuário chegar em calendário', () => {

})


Then('O usuário estará na área de cadastro de cardápio', ()=> {

})

Given('Dado que o usuário esteja na área de cadastro de cardápio', () => {

})

When('O usuário cadastrar a quantidade do peso da refeição', () => {

})
Then('O usuário irá cadastrar o cardápio com sucesso', () =>{

})