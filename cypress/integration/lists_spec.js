import {
  LINE_HEIGHT,
  remToPx
} from "../support/constants";

describe("lists", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for ul', () => {
    cy.get("ul")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(2));

    cy.get("ul")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);
  });

  it('should have default styles for ol', () => {
    cy.get("ol")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(2));

    cy.get("ol")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);
  });

  it('should remove margins for nested lists', () => {
    cy.get("ul ul")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(2));

    cy.get("ol ol")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));
  });

  it('should have default styles for li', () => {
    cy.get("li")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("li")
      .first()
      .invoke('css', 'line-height')
      .should('equal', LINE_HEIGHT);

    // TODO: find a way of testing width without magic numbers
    // cy.get("li")
    //   .first()
    //   .invoke('css', 'max-width')
    //   .should('equal', 'calc(80ch - 3rem)');
  });
});
