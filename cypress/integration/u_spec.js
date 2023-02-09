import {
  ERROR_COLOR
} from "../support/constants";

describe("u", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("u")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'underline');
      
    cy.get("u")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'wavy');

    cy.get("u")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', ERROR_COLOR);
  });
});