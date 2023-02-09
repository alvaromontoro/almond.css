import {
  BORDER_RADIUS,
  SECONDARY_LIGHT,
  remToPx
} from "../support/constants";

describe("textarea", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    
    cy.get("textarea")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);
      
    cy.get("textarea")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("textarea")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("textarea")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("textarea")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(5));

    cy.get("textarea")
      .first()
      .invoke('css', 'line-height')
      .should('equal', remToPx(1.5));

    cy.get("textarea")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("textarea")
      .first()
      .invoke('css', 'overflow')
      .should('equal', 'auto');

    cy.get("textarea")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(0.5)}`);

    cy.get("textarea")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(3));

    cy.get("textarea")
      .first()
      .invoke('css', 'min-width')
      .should('equal', remToPx(15));

    cy.get("textarea")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'middle');

    cy.get("textarea")
      .first()
      .invoke('css', 'width')
      .should('equal', remToPx(15));
  });

});