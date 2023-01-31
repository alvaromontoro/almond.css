import {
  remToPx,
  SECONDARY_LIGHT,
  SECONDARY_LIGHTER,
  BORDER_RADIUS
} from "../support/constants";

describe("figure", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for figure', () => {
    cy.get("figure")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(1));

    cy.get("figure")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("figure")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("figure")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("figure")
      .first()
      .invoke('css', 'display')
      .should('equal', 'block');

    cy.get("figure")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} ${remToPx(0)}`);

    cy.get("figure")
      .first()
      .invoke('css', 'text-align')
      .should('equal', 'center');
  });

  it('should have default styles for figcaption', () => {
    cy.get("figcaption")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.875));

    cy.get("figcaption")
      .first()
      .invoke('css', 'font-style')
      .should('equal', 'italic');
  });
});