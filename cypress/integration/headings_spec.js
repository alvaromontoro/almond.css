import {
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
  HEADING_MARGIN,
  PRIMARY_COLOR,
  remToPx
} from "../support/constants";

describe("headings", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for h1', () => {
    cy.get("h1")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(2.5));

    cy.get("h1")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h1")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("h1")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for h2', () => {
    cy.get("h2")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(2));

    cy.get("h2")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h2")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("h2")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for h3', () => {
    cy.get("h3")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1.66));

    cy.get("h3")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h3")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("h3")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for h4', () => {
    cy.get("h4")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1.45));

    cy.get("h4")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h4")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("h4")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for h5', () => {
    cy.get("h5")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1.25));

    cy.get("h5")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h5")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("h5")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for h6', () => {
    cy.get("h6")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1.125));

    cy.get("h6")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("h6")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("h6")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);
  });

  it('should have default styles for hgroup', () => {
    cy.get("hgroup")
      .first()
      .invoke('css', 'border-left')
      .should('equal', `5px solid ${PRIMARY_COLOR}`);

    cy.get("hgroup")
      .first()
      .invoke('css', 'display')
      .should('equal', 'block');

    cy.get("hgroup")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(1));

    cy.get("hgroup")
      .first()
      .invoke('css', 'margin')
      .should('equal', HEADING_MARGIN);

    cy.get("hgroup h2")
      .first()
      .invoke('css', 'margin')
      .should('equal', '0px');
  });
});