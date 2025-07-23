import {
  PRIMARY_COLOR
} from "../support/constants";

describe("del", () => {
  beforeEach(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("del")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'line-through');

    cy.get("del")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', PRIMARY_COLOR);
  });
});