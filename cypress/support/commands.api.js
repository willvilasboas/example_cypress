
import urls from './urls'
import * as dataSchema from '../fixtures/schema.js'
import * as dataSchema2 from '../fixtures/schema2.js'

require('cypress-plugin-api');
const {expect} = require("chai").use(require('chai-json-schema'));

Cypress.Commands.add('valid_status_query', () => {
    cy.api({
        method: 'GET',
        url: urls.url_base + '/api/report/v1/brazil/uf/sp',
        failOnStatusCode: false      
    }).then((response) => {
            cy.validate_response(response).then(() =>{
                return response.body
            })
       
        })
})

Cypress.Commands.add('valid_status_query2', () => {
    cy.api({
        method: 'GET',
        url: urls.url_base + '/api/report/v1/brazil/uf/sp',
        failOnStatusCode: false      
    }).then((response) => {
            cy.validate_response2(response).then(() =>{
                return response.body
            })
       
        })
})

Cypress.Commands.add('validate_response', (resp) => {
   assert.equal(resp.status, 200, "Validação Status Code")
   assert.equal(resp.body.uid, 35, "Validação uid")
   assert.equal(resp.body.state, "São Paulo", "Validação state")

   console.log(expect(resp.body).to.be.jsonSchema(dataSchema2.valueSchema2))
   expect(Object.keys(dataSchema2.valueSchema2.required).length).to.eq(Object.keys(resp.body).length)
})

Cypress.Commands.add('validate_response2', (resp) => {
    expect(resp.status).to.eq(200)
    console.log(expect(resp.body).to.be.jsonSchema(dataSchema.valueSchema))
    expect(Object.keys(dataSchema.valueSchema.required).length).to.eq(Object.keys(resp.body).length)
 })