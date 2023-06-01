
describe('Criar usuário na API Reqres.in', () => {
   
   it('Deve criar um novo usuário', () => {
      cy.valid_create_user()
   });
});