class CheckoutPage {
    preencherDetalhesDeCobranca(nome, sobrenome, endereco1, endereco2, cidade, cep, telefone, email) {
        cy.get('#billing_first_name').clear().type(nome);
        cy.get('#billing_last_name').clear().type(sobrenome);
        cy.get('#billing_address_1').clear().type(endereco1);
        cy.get('#billing_address_2').clear().type(endereco2);
        cy.get('#billing_city').clear().type(cidade);
        cy.get('#billing_postcode').clear().type(cep);
        cy.get('#billing_phone').clear().type(telefone);
        cy.get('#billing_email').clear().type(email);

        return new Cypress.Promise(resolve => resolve());
    }

    aceitarTermosEConcluirCompra() {
        cy.get('#terms').should('be.visible').click();
        cy.get('#place_order').click();
    }
}

export default new CheckoutPage();


