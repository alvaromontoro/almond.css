import {
  FONT_FAMILY,
  FONT_SIZE_ROOT,
  FONT_WEIGHT_REGULAR,
  SECONDARY_COLOR,
  SECONDARY_BG,
  remToPx
} from "../support/constants";

describe("html", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("html")
      .first()
      .invoke('css', '-webkit-text-size-adjust')
      .should('equal', '100%');

    cy.get("html")
      .first()
      .invoke('css', 'background-color')
      .should('equal', SECONDARY_BG);

    cy.get("html")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_COLOR);

    cy.get("html")
      .first()
      .invoke('css', 'font-family')
      .should('equal', FONT_FAMILY);

    cy.get("html")
      .first()
      .invoke('css', 'font-size')
      .should('equal', FONT_SIZE_ROOT);

    cy.get("html")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("html")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("html")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0));
  });
});