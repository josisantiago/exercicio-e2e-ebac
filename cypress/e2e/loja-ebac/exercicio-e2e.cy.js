/// <reference types="cypress" />

import LoginPage from "../../support/page_objects/login.page"
import ProdutosPage from "../../support/page_objects/produtos.page";
import CheckoutPage from "../../support/page_objects/checkout.page"
import VisualizaPedido from "../../support/page_objects/visualiza-pedido.page"


const perfil = require('../../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        LoginPage.realizarLogin('josiane.teste@teste.com.br', 'teste@123');

        ProdutosPage.buscarProduto('Ingrid Running Jacket')

        ProdutosPage.addProdutoCarrinho('S', 'White', 4)

        CheckoutPage.preencherDetalhesDeCobranca
            ('Josiane',
                'Santiago',
                'Rua das Flores, 35',
                'Apartamento 83 - Bloco 1',
                'Guarulhos', '07040000',
                '1191081621',
                'josiane.teste@teste.com.br')

            .then(() => {
                CheckoutPage.aceitarTermosEConcluirCompra();
            });

        VisualizaPedido.visualizaPedido
    });
})


