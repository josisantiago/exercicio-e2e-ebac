class LoginPage {
    visitaUrl() {
        cy.visit('minha-conta')
    }
    realizarLogin(email, senha) {
        cy.get('#username').type(email);
        cy.get('#password').type(senha);
        cy.get('.woocommerce-form > .button').click();
    }   
}

export default new LoginPage

