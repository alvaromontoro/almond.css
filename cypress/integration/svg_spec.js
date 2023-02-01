import {
  remToPx
} from "../support/constants";

describe("svg", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("svg")
      .first()
      .invoke('css', 'border-width')
      .should('equal', remToPx(0));

    cy.get("svg")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');

    cy.get("svg")
      .first()
      .invoke('css', 'overflow')
      .should('equal', 'hidden');
  });
});