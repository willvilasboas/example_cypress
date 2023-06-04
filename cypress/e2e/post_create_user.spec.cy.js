
describe('Criar usuário na API Reqres.in', { tags: '@api' }, () => {
   
   it('Deve criar um novo usuário', { tags: '@post' }, () => {
      cy.valid_create_user()
   });
});