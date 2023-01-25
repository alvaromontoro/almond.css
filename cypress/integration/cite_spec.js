import {
  FONT_WEIGHT_THIN
} from "../support/constants";

describe("cite", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("cite")
      .first()
      .invoke('css', 'font-style')
      .should('equal', `italic`);

    cy.get("cite")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_THIN);
  });
});