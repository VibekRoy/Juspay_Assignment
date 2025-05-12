// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillAddress", (user) => {
  cy.get('[name="name"]').type(user.name);
  cy.get('[name="phone"]').type(user.phone);
  cy.get('[name="pincode"]').type(user.pincode);
  cy.wait(5000);
  cy.get('[name="addressLine2"]').type(user.addressLine2);
  cy.get('[name="addressLine1"]').type(user.addressLine1);
  cy.contains("span", "Home (All day delivery)").click();
  cy.contains("Save and Deliver Here").click();
});
