class ProdutosPage {
    visitaUrl() {
        cy.visit('produtos')
    }
    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }
    buscarProdutoLista(nomeProduto) {
        cy.get('.row')
            .contains(nomeProduto)
            .click()
    }
    visitarProduto(nomeProduto) {
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }
    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear()
            .type('{selectall}{backspace}')
            .type(quantidade) 
        cy.get('.single_add_to_cart_button').should('be.visible').click()
        cy.get('.woocommerce-message > .button').should('be.visible').click()
        cy.get('.checkout-button').click()
    }      
}

export default new ProdutosPage

