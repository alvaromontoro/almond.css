import {
  remToPx
} from "../support/constants";

describe("q", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("q")
      .first()
      .invoke('css', 'font-style')
      .should('equal', 'italic');
  });

  it('should have the right start and end quote styles', () => {
    cy.get("q")
      .before('content')
      .should('equal', 'open-quote');
    
    cy.get("q")
      .after('content')
      .should('equal', 'close-quote');
  });

  it('should have normal font-style for the inline quotes', () => {
    cy.get("q")
      .before('font-style')
      .should('equal', 'normal');
  
    cy.get("q")
      .after('font-style')
      .should('equal', 'normal');
  });
});