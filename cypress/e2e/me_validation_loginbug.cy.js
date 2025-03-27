describe('Баг с регистром', function () {

   beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

        it('Валидация на наличие @', function () {
          cy.get('#mail').type('GerMan@Dolnikov.ru');
          cy.get('#pass').type('USER_PASSWORD');
          cy.get('#loginButton').click();
          cy.get('#messageHeader').should('be.visible');
          cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
})