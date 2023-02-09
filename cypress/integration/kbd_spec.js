import {
  BORDER_RADIUS,
  SECONDARY_COLOR,
  remToPx,
  SECONDARY_LIGHTER,
  SECONDARY_LIGHT
} from "../support/constants";

describe("kbd", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("kbd")
      .first()
      .invoke('css', 'background-color')
      .should('equal', SECONDARY_LIGHTER);

    cy.get("kbd")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("kbd")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("kbd")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_COLOR);

    cy.get("kbd")
      .first()
      .invoke('css', 'font-family')
      .should('equal', 'monospace, monospace');

    cy.get("kbd")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.9));

    cy.get("kbd")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0.125)} ${remToPx(0.25)}`);
  });
});