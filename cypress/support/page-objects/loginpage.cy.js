/// <reference types="cypress" />
class LoginPage{
  get matricula() { return cy.get('.mb-3 > .sc-crXcEl > .form-control')}
  get senha() { return cy.get('.mb-4.col > .sc-crXcEl > .form-control')}
  get LoginButton() {return   cy.get('.w-100') }

  login(user, pass){
    this.matricula.type(user)
    this.senha.type(pass)
    this.LoginButton.click()
  }
}
export default LoginPage;
