class VisualizaPedido {
    visitarUrl() {
        cy.visit('order-received')
    }
    visualizaPedido() {        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    }        
}

export default new VisualizaPedido