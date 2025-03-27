describe('Восстановление', function () {

   beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        });

        it('Восстановление пароля', function () {
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('USER_LOGIN');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        })
    })