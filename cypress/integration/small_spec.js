import {
  remToPx
} from "../support/constants";

describe("small", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("small")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.75));
  });
});