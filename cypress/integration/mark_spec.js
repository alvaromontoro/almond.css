import {
  PRIMARY_BRIGHT,
  SECONDARY_DARKER
} from "../support/constants";

describe("mark", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("mark")
      .first()
      .invoke('css', 'background-color')
      .should('equal', PRIMARY_BRIGHT);

    cy.get("mark")
      .first()
      .invoke('css', 'border-left')
      .should('equal', `4px solid ${PRIMARY_BRIGHT}`);

    cy.get("mark")
      .first()
      .invoke('css', 'border-right')
      .should('equal', `4px solid ${PRIMARY_BRIGHT}`);

    cy.get("mark")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_DARKER);
  });
});