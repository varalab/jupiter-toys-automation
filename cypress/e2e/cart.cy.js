import { homePage } from '../pages/HomePage';
import { shopPage } from '../pages/ShopPage';
import { cartPage } from '../pages/CartPage';

describe('Cart Tests', () => {

  it('Test Case 3 - verify prices, subtotals and total', () => {

    cy.visit('/');

    homePage.goToShop();

    const products = [
      { name: 'Stuffed Frog', quantity: 2 },
      { name: 'Fluffy Bunny', quantity: 5 },
      { name: 'Valentine Bear', quantity: 3 }
    ];

    products.forEach((product) => {

      shopPage.buyProduct(
        product.name,
        product.quantity
      );

    });

    shopPage.goToCart();

    products.forEach((product) => {

      cartPage.verifyProduct(
        product.name,
        product.quantity
      );

    });

    cartPage.verifyTotalEqualsSumOfSubtotals();
  });

});