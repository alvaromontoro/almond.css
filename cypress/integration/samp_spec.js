import {
  FONT_WEIGHT_BOLD,
  remToPx
} from "../support/constants";

describe("samp", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("samp")
      .first()
      .invoke('css', 'font-family')
      .should('equal', 'monospace, monospace');
      
    cy.get("samp")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("samp")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);
  });
});