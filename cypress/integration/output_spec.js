import {
  FONT_WEIGHT_BOLD
} from "../support/constants";

describe("output", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("output")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("output")
      .first()
      .invoke('css', 'unicode-bidi')
      .should('equal', 'isolate');
  });
});