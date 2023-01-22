import {
  FONT_WEIGHT_BOLDER
} from "../support/constants";

describe("b", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("b")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLDER);
  });
});
