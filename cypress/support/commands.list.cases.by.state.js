
import urls from './urls'
import * as dataSchema from '../fixtures/schema.js'

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

Cypress.Commands.add('validate_response', (resp) => {
   expect(resp.status).to.eq(200)
   console.log(expect(resp.body).to.be.jsonSchema(dataSchema.valueSchema))
   expect(Object.keys(dataSchema.valueSchema.required).length).to.eq(Object.keys(resp.body).length)
})    