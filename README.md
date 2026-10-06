# Jupiter Toys Test Automation

This project contains automated UI tests for the Jupiter Toys application as part of a technical assessment.

## Technology Used

- Cypress
- JavaScript
- Node.js
- Page Object Model
- GitHub Actions

## Application Under Test

Jupiter Toys

http://jupiter.cloud.planittesting.com

## Test Cases

### Test Case 1 - Contact Form Validation

- Navigate from the Home page to the Contact page
- Click Submit without entering mandatory fields
- Verify validation messages are displayed
- Populate the mandatory fields
- Verify validation messages disappear

### Test Case 2 - Successful Contact Submission

- Navigate to the Contact page
- Populate mandatory fields
- Click Submit
- Verify the successful submission message

This test is executed 5 times to check reliability.

### Test Case 3 - Shopping Cart Validation

Purchase:

- 2 Stuffed Frog
- 5 Fluffy Bunny
- 3 Valentine Bear

Verify:

- Product price
- Product quantity
- Product subtotal
- Subtotal equals price multiplied by quantity
- Total equals the sum of all subtotals

## Project Structure

```text
cypress
├── e2e
│   ├── contact.cy.js
│   └── cart.cy.js
│
├── pages
│   ├── HomePage.js
│   ├── ContactPage.js
│   ├── ShopPage.js
│   └── CartPage.js
│
└── support
```

## Installation

Install dependencies:

```bash
npm ci
```

## Running Tests

Run all tests in headless mode:

```bash
npm test
```

Open Cypress interactively:

```bash
npm run test:open
```

## Continuous Integration

GitHub Actions is configured to run the Cypress tests automatically on:

- Push
- Pull request
- Manual execution

The workflow file is located at:

```text
.github/workflows/cypress.yml
```