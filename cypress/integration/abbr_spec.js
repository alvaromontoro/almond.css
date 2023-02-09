import {
  PRIMARY_COLOR
} from "../support/constants";

describe("abbr", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("abbr[title]")
      .first()
      .invoke('css', 'border-bottom')
      .should('contain', '0px');

    cy.get("abbr[title]")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'underline');

    cy.get("abbr[title]")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', 'dashed');

    cy.get("abbr[title]")
      .first()
      .invoke('css', 'text-decoration')
      .should('contain', PRIMARY_COLOR);
  });
});
