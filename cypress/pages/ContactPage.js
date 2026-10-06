class ContactPage {

  enterForename(forename) {
    cy.get('#forename').clear().type(forename);
  }

  enterEmail(email) {
    cy.get('#email').clear().type(email);
  }

  enterMessage(message) {
    cy.get('#message').clear().type(message);
  }

  clickSubmit() {
    cy.contains('a', 'Submit').click();
  }

  verifyMandatoryErrors() {
    cy.get('#forename-err')
      .should('be.visible')
      .and('contain.text', 'Forename is required');

    cy.get('#email-err')
      .should('be.visible')
      .and('contain.text', 'Email is required');

    cy.get('#message-err')
      .should('be.visible')
      .and('contain.text', 'Message is required');
  }

  verifyMandatoryErrorsAreGone() {
    cy.get('#forename-err').should('not.exist');
    cy.get('#email-err').should('not.exist');
    cy.get('#message-err').should('not.exist');
  }

  verifySuccessMessage(forename) {
    cy.contains(`Thanks ${forename}`, { timeout: 15000 })
    .should('be.visible');
  }
}

export const contactPage = new ContactPage();