import {
  FONT_WEIGHT_BOLD,
  SECONDARY_COLOR,
  SECONDARY_LIGHTER,
  remToPx
} from "../support/constants";

describe("code", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("code")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_COLOR);

    cy.get("code")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("code")
      .first()
      .invoke('css', 'font-family')
      .should('equal', 'monospace, monospace');

    cy.get("code")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("code")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');
      
    cy.get("code")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("code")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(0.25)}`);
  });
});