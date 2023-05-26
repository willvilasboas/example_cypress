
describe('Validar login com sucesso do site Test Automation', () => {

   let data;
 
   before(() => {
 
     cy.fixture('login').then((tData) => {
       data = tData;
       cy.log(data.username)
       cy.log(data.password)
     });
 
   });
 
   it('Realiza o login com sucesso', () => {
     cy.login(data.username, data.password)
     
   })
 })
 