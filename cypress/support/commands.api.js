
import urls from './urls'
import * as dataSchema from '../fixtures/schema.js'
import * as queryString from '../fixtures/users.json'

import { faker } from '@faker-js/faker';


var nameFaker = faker.name.middleName()
var jobFaker = faker.name.jobTitle()


const { expect } = require("chai").use(require('chai-json-schema'));

Cypress.Commands.add('consult_list_users', () => {
    cy.api({
        method: 'GET',
        url: urls.url_base + '/api/users',
        qs: {
            "page": queryString[0].page,
            "per_page": queryString[0].per_page
        },
        failOnStatusCode: false
    }).then((response) => {
        cy.log('URL: ' + response.allRequestResponses[0]["Request URL"])
        cy.validate_response_list_users(response).then(() => {
            
            return response.body
        })
    })
})

Cypress.Commands.add('validate_response_list_users', (res) => {
    chai.assert(res.status == 200, 'Valida statusCode')
    chai.assert(res.body != '', 'Valida que o body não pode ser vazio')
    chai.assert(queryString[0].page == res.body.page, 'Valida o campo page no response se é igual o enviado na requisição')
    chai.assert(queryString[0].per_page == res.body.per_page, 'Valida o campo per_page no response se é igual o enviado na requisição')
    chai.assert.isArray(res.body.data, 'Valida que o campo data do response é um array');
    expect(res.body).to.be.jsonSchema(dataSchema.valueSchema)
    for (const prop in res.body.data) {
        expect(res.body.data[prop]).to.be.jsonSchema(dataSchema.valueSchema.properties.data.items.properties);
    }
})

Cypress.Commands.add('valid_create_user', () => {
    cy.api({
        method: 'POST',
        url: urls.url_base + '/api/users',
        body: {
            name: nameFaker,
            job: jobFaker
        },
        failOnStatusCode: false
    }).then((response) => {
        cy.validate_response_create_user(response).then(() => {
            return response.body
        })
    })
})

Cypress.Commands.add('validate_response_create_user', (res) => {
    chai.assert(res.status == 201, 'Valida statusCode')
    chai.assert(res.body != '', 'Valida que o body não pode ser vazio')
    chai.assert.equal(res.body.name, nameFaker, "Valida que campo name criado é igual enviado na requisição")
    chai.assert.equal(res.body.job, jobFaker, "Valida que campo job criado é igual enviado na requisição")
    chai.assert(res.body.id != '', "Valida que campo id não pode ser vazio")
    chai.assert(res.body.createdAt != '', "Valida que campo createdAt não pode ser vazio")

})



