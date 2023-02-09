import {
  LINE_HEIGHT,
  remToPx
} from "../support/constants";

describe("p", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("p")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("p")
      .first()
      .invoke('css', 'line-height')
      .should('equal', LINE_HEIGHT);

    cy.get("p")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);

    // TODO: find a way to test this without magic numbers
    // cy.get("p")
    //   .first()
    //   .invoke('css', 'max-width')
    //   .should('equal', '80ch');
  });
});