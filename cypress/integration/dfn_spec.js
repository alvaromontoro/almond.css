import {
  FONT_WEIGHT_BOLD
} from "../support/constants";

describe("dfn", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("dfn")
      .first()
      .invoke('css', 'font-style')
      .should('equal', `italic`);

    cy.get("dfn")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);
  });
});