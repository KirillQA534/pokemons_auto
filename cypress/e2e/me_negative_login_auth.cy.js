describe('Неправильный логин', function () {

    beforeEach('Начало теста', function () {
          cy.visit('https://login.qa.studio');
          cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    afterEach('Конец теста', function () {
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         });
 
         it('Неверный логин и верный пароль', function () {
            cy.get('#mail').type('WRONG_LOGIN');
            cy.get('#pass').type('USER_PASSWORD');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
         })
     })