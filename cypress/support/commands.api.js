
import urls from './urls'
import * as dataSchema from '../fixtures/schema.js'


require('cypress-plugin-api');
const {expect} = require("chai").use(require('chai-json-schema'));

Cypress.Commands.add('valid_list_state', () => {
    cy.api({
        method: 'GET',
        url: urls.url_base + '/api/report/v1/brazil/uf/sp',
        failOnStatusCode: false      
    }).then((response) => {
            cy.validate_response_state(response).then(() =>{
                return response.body
            })
        })
})

Cypress.Commands.add('validate_response_state', (resp) => {
    expect(resp.status).to.eq(200)
    console.log(expect(resp.body).to.be.jsonSchema(dataSchema.valueSchema)) // Verifica se o response tem a mesma quantidade de campos do contrato
    expect(Object.keys(dataSchema.valueSchema.required).length).to.eq(Object.keys(resp.body).length) // Verifica se o response tem a mesma quantidade de campos que o contrato 
})


Cypress.Commands.add('valid_list_country', () => {
    cy.api({
        method: 'GET',
        url: urls.url_base + '/api/report/v1/Brazil',
        failOnStatusCode: false      
    }).then((response) => {
            cy.validate_response_country(response).then(() =>{
                return response.body
            })
        })
})

Cypress.Commands.add('validate_response_country', (resp) => {
    expect(resp.status).to.eq(200) // Verifica se o status da resposta é 200 OK
    expect(resp.body).to.not.be.empty // Verifica se o corpo da resposta não está vazio

    // Exemplo se os campos estao nao array e se nao sao vazios
    cy.wrap(resp.body.data).should('have.property', 'country').and('not.eq', '');
    cy.wrap(resp.body.data).should('have.property', 'cases').and('not.eq', '');
    cy.wrap(resp.body.data).should('have.property', 'confirmed').and('not.eq', '');
    cy.wrap(resp.body.data).should('have.property', 'deaths').and('not.eq', '');
    cy.wrap(resp.body.data).should('have.property', 'recovered').and('not.eq', '');
    cy.wrap(resp.body.data).should('have.property', 'updated_at').and('not.eq', '');

})
  