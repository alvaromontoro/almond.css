import {
  PRIMARY_LIGHTER,
  remToPx
} from "../support/constants";

describe("widget progress", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'aspect-ratio')
      .should('equal', '1 / 1');

    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'display')
      .should('equal', 'grid');

    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(2));

    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'overflow')
      .should('equal', 'hidden');

    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'place-items')
      .should('equal', 'center');

    cy.get("[role=progressbar]")
      .first()
      .invoke('css', 'position')
      .should('equal', 'relative');
  });

  it('should display the bar using the ::before', () => {
    cy.get("[role=progressbar]")
      .before('content')
      .should('equal', '');

    cy.get("[role=progressbar]")
      .before('left')
      .should('equal', remToPx(0));

    cy.get("[role=progressbar]")
      .before('top')
      .should('equal', remToPx(0));

    cy.get("[role=progressbar]")
      .before('background-color')
      .should('equal', PRIMARY_LIGHTER);
    
    cy.get("[role=progressbar]")
      .before('-webkit-print-color-adjust')
      .should('equal', 'exact');

    cy.get("[role=progressbar]")
      .before('position')
      .should('equal', 'absolute');
  });

  it('should display the value using the ::after', () => {
    cy.get("[role=progressbar]")
      .after('content')
      .should('contain', 'counter(percentage) "%'); // bug?
  });
});