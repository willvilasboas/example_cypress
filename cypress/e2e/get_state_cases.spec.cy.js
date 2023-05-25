
describe('Consulta na api Covid19 Brazil API', () => {
   
   it('GET - Obter lista de casos por estado', () => {
        cy.valid_list_state()       
     })
     /*
     it('Cenario: Validar o contrato do serviço - Lista status atual por estado brasileiros ', () => {
        cy.valid_status_query2()       
     })
     */
})
/*
describe('Validar login com sucesso no site', () => {

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
 */