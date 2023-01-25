import {
  remToPx
} from "../support/constants";

describe("body", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("body")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("body")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(1));
  });

  it('should have a specific width for screens 1024px or larger', () => {
    cy.viewport(1100, 1100);

    cy.get("body")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '920px');
  });

  it('should have a specific width for screens 1200px or larger', () => {
    cy.viewport(1300, 1300);

    cy.get("body")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '1080px');
  });
});