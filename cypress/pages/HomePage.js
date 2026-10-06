class HomePage {

  goToContact() {
    cy.contains('a', 'Contact').click();
  }

  goToShop() {
    cy.contains('a', 'Shop').click();
  }
}

export const homePage = new HomePage();