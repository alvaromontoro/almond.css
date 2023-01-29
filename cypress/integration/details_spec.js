import {
  BORDER_RADIUS,
  SECONDARY_COLOR,
  SECONDARY_LIGHT,
  remToPx
} from "../support/constants";

describe("details/summary", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles (details)', () => {
    cy.get("details")
      .first()
      .invoke('css', 'display')
      .should('equal', 'block');

    cy.get("details")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)}`);

    cy.get("details")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);
  });

  it('should have default styles (summary)', () => {
    cy.get("summary")
      .first()
      .invoke('css', 'border-bottom')
      .should('equal', `0px none ${SECONDARY_COLOR}`);

    // click to expand the details section
    cy.get("summary")
      .first()
      .click();

    cy.get("summary")
      .first()
      .invoke('css', 'border-bottom')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);
  });

  it('should not have borders when stacked (except last one)', () => {
    cy.get("details + details")
      .first()
      .invoke('css', 'border-top')
      .should('equal', `0px none ${SECONDARY_COLOR}`);

    cy.get("details + details")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', '0px');
  });

  it('should have rounded corner (first and last of type)', () => {
    cy.get("details")
      .first()
      .invoke('css', 'border-top-left-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("details")
      .first()
      .invoke('css', 'border-top-right-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("details")
      .last()
      .invoke('css', 'border-bottom-left-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("details")
      .last()
      .invoke('css', 'border-bottom-right-radius')
      .should('equal', BORDER_RADIUS);
  });
});