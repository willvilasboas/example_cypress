
describe('Consulta de usuarios via API Reqres.in', () => {
   
   it('GET - Deve retornar uma lista de usuarios', () => {
      cy.consult_list_users()       
   })
})
