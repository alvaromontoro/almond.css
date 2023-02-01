import {
  remToPx
} from "../support/constants";

describe("sub", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for sub', () => {
    cy.get("sub")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.75));

    cy.get("sub")
      .first()
      .invoke('css', 'position')
      .should('equal', 'relative');

    cy.get("sub")
      .first()
      .invoke('css', 'line-height')
      .should('equal', remToPx(0));

    cy.get("sub")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'baseline');

    cy.get("sub")
      .first()
      .invoke('css', 'bottom')
      .should('equal', remToPx(-0.25 * 0.75));
  });

  it('should have default styles for sup', () => {
    cy.get("sup")
    .first()
    .invoke('css', 'font-size')
    .should('equal', remToPx(0.75));

    cy.get("sup")
      .first()
      .invoke('css', 'position')
      .should('equal', 'relative');

    cy.get("sup")
      .first()
      .invoke('css', 'line-height')
      .should('equal', remToPx(0));

    cy.get("sup")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'baseline');

    cy.get("sup")
      .first()
      .invoke('css', 'top')
      .should('equal', remToPx(-0.5 * 0.75)); // 75% of 0.5 because size = 0.75em
  });
});