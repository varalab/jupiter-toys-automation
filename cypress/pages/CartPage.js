class CartPage {

  parseCurrency(value) {
    return Number(value.replace(/[^0-9.-]+/g, ''));
  }

  verifyProduct(productName, expectedQuantity) {

    cy.contains('tr', productName).within(() => {

      cy.get('td')
        .eq(1)
        .invoke('text')
        .then((priceText) => {

          const price = this.parseCurrency(priceText);

          cy.get('input')
            .should('have.value', expectedQuantity.toString());

          cy.get('td')
            .eq(3)
            .invoke('text')
            .then((subtotalText) => {

              const subtotal = this.parseCurrency(subtotalText);

              expect(subtotal).to.equal(
                price * expectedQuantity
              );
            });
        });
    });
  }

  verifyTotalEqualsSumOfSubtotals() {

    const subtotals = [];

    cy.get('tbody tr').each(($row) => {

      cy.wrap($row)
        .find('td')
        .eq(3)
        .invoke('text')
        .then((text) => {

          const value = this.parseCurrency(text);

          subtotals.push(value);
        });
    });

    cy.then(() => {

      const expectedTotal = subtotals.reduce(
        (total, subtotal) => total + subtotal,
        0
      );

      cy.get('.total')
        .invoke('text')
        .then((totalText) => {

          const actualTotal =
            this.parseCurrency(totalText);

          expect(actualTotal)
            .to.equal(expectedTotal);
        });
    });
  }
}

export const cartPage = new CartPage();