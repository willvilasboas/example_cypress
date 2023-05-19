
describe('Consumo da api Covid19 Brazil API', () => {

    it('Cenario: Validar o contrato do serviço - Lista status atual por estado brasileiros ', () => {
        cy.valid_status_query()       
     })
     it('Cenario: Validar o contrato do serviço - Lista status atual por estado brasileiros ', () => {
        cy.valid_status_query2()       
     })
})

describe('Usuarios devem realizar o login', () => {

   let data;
 
   before(() => {
 
     cy.fixture('login').then((tData) => {
       data = tData;
       cy.log(data.username)
       cy.log(data.password)
     });
 
   });
 
   it('atraves da pagina da aplicacao com sucesso', () => {
     cy.login(data.username, data.password)
     
   })
 })



