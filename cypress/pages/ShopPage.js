class ShopPage {

  buyProduct(productName, quantity) {

    cy.contains('.product', productName).within(() => {

      for (let i = 0; i < quantity; i++) {
        cy.contains('Buy').click();
      }

    });
  }

  goToCart() {
    cy.contains('a', 'Cart').click();
  }
}

export const shopPage = new ShopPage();