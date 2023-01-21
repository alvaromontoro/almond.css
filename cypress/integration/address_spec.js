import {
  remToPx
} from "../support/constants";

describe("address", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("address")
      .first()
      .invoke('css', 'display')
      .should('equal', 'block');

    cy.get("address")
      .first()
      .invoke('css', 'font-style')
      .should('equal', 'normal');

    cy.get("address")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} 0px`);
  });
});
