import {
  remToPx
} from "../support/constants";

describe("blockquote", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("blockquote")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(1)} 0px ${remToPx(1)} ${remToPx(3)}`);

    cy.get("blockquote")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(1));

    cy.get("blockquote")
      .first()
      .invoke('css', 'page-break-inside')
      .should('equal', 'avoid');

    cy.get("blockquote")
      .first()
      .invoke('css', 'position')
      .should('equal', 'relative');

    cy.get("blockquote")
      .first()
      .invoke('css', 'overflow')
      .should('equal', 'hidden');
  });

  it('should have the right start and end quote styles', () => {
    cy.get("blockquote")
      .before('content')
      .should('equal', 'open-quote');
    
    cy.get("blockquote")
      .after('content')
      .should('equal', 'no-close-quote');
  });

  it('should have a before with default styles', () => {
    cy.get("blockquote")
      .before('font-size')
      .should('equal', remToPx(5));

    cy.get("blockquote")
      .before('left')
      .should('equal', remToPx(0.25));

    cy.get("blockquote")
      .before('position')
      .should('equal', 'absolute');

    cy.get("blockquote")
      .before('top')
      .should('equal', '0px');

    cy.get("blockquote")
      .before('z-index')
      .should('equal', '-1');
  });
});
