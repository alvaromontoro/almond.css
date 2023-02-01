import {
  remToPx
} from "../support/constants";

describe("progress", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("progress")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("progress")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');

    cy.get("progress")
      .first()
      .invoke('css', 'min-width')
      .should('equal', remToPx(15));

    cy.get("progress")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'baseline');
  })
});