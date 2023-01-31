import {
  BORDER_RADIUS,
  remToPx,
  SECONDARY_LIGHT,
  SECONDARY_LIGHTER
} from "../support/constants";

describe("fieldset", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles in fieldset', () => {
    cy.get("fieldset")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("fieldset")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);

    cy.get("fieldset")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("fieldset")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)} ${remToPx(1)}`);
  });

  it('should have default styles in legend', () => {
    cy.get("legend")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("legend")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0.25)} ${remToPx(0.5)}`);

    cy.get("legend")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("legend")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);
  });
});