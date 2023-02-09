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

/**
 * Code adapted from Victor Navarro: https://stackoverflow.com/a/57249958/3695983
 */
const unquote = str => str.replace(/(^")|("$)/g, '');

/**
 * Add command "before" to Cypress.
 * This command will take a CSS property as a string parameter, and return the value
 * of the property in the ::before of the selected element.
 * Example of use: cy.get("button").before("content") will return the value of the
 * content property of the button element.
 */
Cypress.Commands.add(
  'before',
  { prevSubject: 'element' },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'before');
    return unquote(before.getPropertyValue(property));
  },
);

/**
 * Add command "after" to Cypress.
 * Same as above, but for the ::after pseudo-element.
 */
Cypress.Commands.add(
  'after',
  { prevSubject: 'element' },
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'after');
    return unquote(before.getPropertyValue(property));
  },
);