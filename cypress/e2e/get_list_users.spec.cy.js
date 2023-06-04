
describe('Consulta de usuarios via API Reqres.in', { tags: '@api' }, () => {
   
   it('GET - Deve retornar uma lista de usuarios', { tags: '@get' }, () => {
      cy.consult_list_users()       
   })
})
