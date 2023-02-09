import {
  remToPx
} from "../support/constants";

describe("pre", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("pre")
      .first()
      .invoke('css', 'font-family')
      .should('equal', 'monospace, monospace');

    cy.get("pre")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("pre")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);

    cy.get("pre")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');

    cy.get("pre")
      .first()
      .invoke('css', 'overflow')
      .should('equal', 'auto');
  });

  it('should have specific styles for code inside pre', () => {
    cy.get("pre > code")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("pre > code")
      .first()
      .invoke('css', 'display')
      .should('equal', 'block');

    cy.get("pre > code")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("pre > code")
      .first()
      .invoke('css', 'line-height')
      .should('equal', remToPx(1.5));

    cy.get("pre > code")
      .first()
      .invoke('css', 'min-width')
      .should('equal', '100%');

    cy.get("pre > code")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(1));

    // TODO: find a way to test the width with min-content
    // cy.get("pre > code")
    //   .first()
    //   .invoke('css', 'width')
    //   .should('equal', 'min-content');
  });
});