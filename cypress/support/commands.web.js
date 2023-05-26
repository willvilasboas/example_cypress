
import urls from './urls'
import login from "../selectors/login.sel.cy.js"


//require('cypress-xpath')

Cypress.Commands.add('login', (username, password) => {
    cy.visit(urls.login)
    cy.get(login.username).type(username)
    cy.get(login.password).type(password)
    cy.get(login.loginButton).click()
    //cy.contains('h1', 'Dashboard')
    cy.xpath('//h1').should('have.text', 'Dashboard')
    cy.xpath('//a//img[@src="assets/img/profile-img.jpg"]/following-sibling::span').should('have.text', 'K. Anderson')

})

Cypress.Commands.add('new_user', (name, username, password, roles) => {

    setAuthCookies()
    cy.visit(urls.users, { onBeforeLoad(win) {setAuthSessionStorage(win)}})
    
    cy.get(users.name).click({force: true}).type(name)
    cy.get(users.username).type(username)
    cy.get(users.password).type(password)
    cy.get(users.passwordConfirmation).type(password)
    cy.get(users.roles).type(roles)
    cy.get(users.submit).click()

    cy.get(users.panel_success).should('be.visible')

})

function setAuthCookies() {

    cy.setCookie("user.id", String(Cypress.env("auth.user.id")))
    cy.setCookie("token", Cypress.env("auth.token").replace(" ", "%20"))
    cy.request(urls.auth)

}

function setAuthSessionStorage(win) {

    win.sessionStorage.setItem("user.id", Cypress.env("auth.user.id"))
    win.sessionStorage.setItem("token", Cypress.env("auth.token"))

}

