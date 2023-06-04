
describe('Validar login com sucesso do site Test Automation', { tags: '@web' }, () => {

   let data;
 
   before(() => {
 
     cy.fixture('login').then((tData) => {
       data = tData;
       cy.log(data.username)
       cy.log(data.password)
     });
 
   });
 
   it('Realiza o login com sucesso',  { tags: '@login' }, () => {
     cy.login(data.username, data.password)
     
   })
 })
 