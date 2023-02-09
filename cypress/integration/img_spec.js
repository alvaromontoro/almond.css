import {
  remToPx
} from "../support/constants";

describe("img", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("img")
      .first()
      .invoke('css', 'border-width')
      .should('equal', remToPx(0));

    cy.get("img")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');
  });
});