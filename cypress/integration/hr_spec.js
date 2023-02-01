import {
  SECONDARY_LIGHT,
  remToPx
} from "../support/constants";

describe("hr", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("hr")
      .first()
      .invoke('css', 'border-width')
      .should('equal', `1px 0px 0px`);

    cy.get("hr")
      .first()
      .invoke('css', 'border-top')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("hr")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'content-box');

    cy.get("hr")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(0));

    cy.get("hr")
      .first()
      .invoke('css', 'margin-top')
      .should('equal', remToPx(2));

    cy.get("hr")
      .first()
      .invoke('css', 'max-width')
      .should('equal', remToPx(15));
  });
});