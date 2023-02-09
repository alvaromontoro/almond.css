import {
  PRIMARY_COLOR
} from "../support/constants";

describe("s", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for s', () => {
    cy.get("s")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'line-through');

    cy.get("s")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', PRIMARY_COLOR);
  });

  it('should have default styles for strike', () => {
    cy.get("strike")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'line-through');

    cy.get("strike")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', PRIMARY_COLOR);
  });
});