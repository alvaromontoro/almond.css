import {
  FONT_WEIGHT_BOLD,
  PRIMARY_COLOR,
  remToPx
} from "../support/constants";

describe("a", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("a")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("a")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("a")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'underline');
  });

  it('should not have an icon by default', () => {
    cy.get("a[href='#']")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'none');
  })

  it('should have icons when special link', () => {
    cy.get("a[href^='mailto:']")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[href^='tel:']")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[href^='sms:']")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[href^='file:']")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[download]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[rel~=external]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');

    cy.get("a[rel~=bookmark]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg+xml');
  });

  it('should have a printable icon that does not overlap when special link', () => {
    cy.get("a[href^='mailto:']")
      .first()
      .invoke('css', 'print-color-adjust')
      .should('equal', 'exact');

    cy.get("a[href^='mailto:']")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(1.25));
  });
});
