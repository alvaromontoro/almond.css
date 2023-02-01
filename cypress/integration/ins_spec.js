import {
  PRIMARY_COLOR
} from "../support/constants";

describe("ins", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("ins")
      .first()
      .invoke('css', 'text-decoration-color')
      .should('equal',PRIMARY_COLOR);

    cy.get("ins")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'underline');
  });
});