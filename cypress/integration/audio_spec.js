import {
  remToPx
} from "../support/constants";

describe("audio", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("audio")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("audio")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'baseline');

    cy.get("audio")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');
  });

  it('should be hidden if no controls', () => {
    cy.get("audio:not([controls]")
      .first()
      .invoke('css', 'display')
      .should('equal', 'none');

    cy.get("audio:not([controls]")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(0));
  });
});