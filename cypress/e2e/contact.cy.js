import { homePage } from '../pages/HomePage';
import { contactPage } from '../pages/ContactPage';

describe('Contact Page Tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 1 - verify mandatory field validation', () => {

    homePage.goToContact();

    contactPage.clickSubmit();

    contactPage.verifyMandatoryErrors();

    contactPage.enterForename('Bhargavi');
    contactPage.enterEmail('bhargavi@test.com');
    contactPage.enterMessage('This is an automated test message');

    contactPage.verifyMandatoryErrorsAreGone();
  });


  Cypress._.times(5, (iteration) => {

    it(`Test Case 2 - successful submission - Run ${iteration + 1}`, () => {

      homePage.goToContact();

      contactPage.enterForename('Bhargavi');
      contactPage.enterEmail('bhargavi@test.com');
      contactPage.enterMessage(
        `Automated submission - run ${iteration + 1}`
      );

      contactPage.clickSubmit();

      contactPage.verifySuccessMessage('Bhargavi');
    });

  });

});