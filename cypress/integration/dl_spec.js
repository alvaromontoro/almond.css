import {
  remToPx,
  FONT_WEIGHT_BOLD
} from "../support/constants";

describe("dl", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for dl', () => {
    cy.get("dl")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("dl")
      .first()
      .invoke('css', 'line-height')
      .should('equal', remToPx(1.5));

    cy.get("dl")
      .first()
      .invoke('css', 'margin')
      .should('contain', `${remToPx(1)} ${remToPx(0)}`);
  });

  it('should have default styles for dt', () => {
    cy.get("dt")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("dt")
      .first()
      .invoke('css', 'margin-top')
      .should('contain', remToPx(1));
  });

  it('should have default styles for dd', () => {
    cy.get("dd")
      .first()
      .invoke('css', 'font-style')
      .should('equal', 'italic');

    cy.get("dd")
      .first()
      .invoke('css', 'margin-left')
      .should('contain', remToPx(1));
  });
});