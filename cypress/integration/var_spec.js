import {
  FONT_WEIGHT_BOLD,
  remToPx
} from "../support/constants";

describe("var", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("var")
      .first()
      .invoke('css', 'font-family')
      .should('equal', 'monospace, monospace');

      cy.get("var")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

      cy.get("var")
      .first()
      .invoke('css', 'font-style')
      .should('contain', 'normal');

      cy.get("var")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);
  });
});