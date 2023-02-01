import {
  SECONDARY_BG,
  remToPx,
  SECONDARY_COLOR,
  FONT_WEIGHT_BOLDER,
  SECONDARY_LIGHTER
} from "../support/constants";

describe("tables", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for table', () => {
    cy.get("table")
      .first()
      .invoke('css', 'background-color')
      .should('equal', SECONDARY_BG);

    cy.get("table")
      .first()
      .invoke('css', 'border-width')
      .should('equal', remToPx(0));

    cy.get("table")
      .first()
      .invoke('css', 'border-collapse')
      .should('equal', 'collapse');

    cy.get("table")
      .first()
      .invoke('css', 'border-spacing')
      .should('equal', `${remToPx(0)} ${remToPx(0)}`);

    cy.viewport(1500, 1500)
    cy.get("table")
      .first()
      .invoke('css', 'width')
      .should('equal', '1080px'); // this is the max-width of the body
  });

  it('should have default styles for thead', () => {
    cy.get("thead")
      .first()
      .invoke('css', 'border-bottom')
      .should('equal', `2px solid ${SECONDARY_COLOR}`);
  });

  it('should have default styles for tfoot', () => {
    cy.get("tfoot")
      .first()
      .invoke('css', 'border-top')
      .should('equal', `2px solid ${SECONDARY_COLOR}`);
  });

  it('should have zebra stripes for table rows (in body)', () => {
    cy.get("tbody tr:nth-child(2)")
      .first()
      .invoke('css', 'background-color')
      .should('equal', SECONDARY_LIGHTER);
  });

  it('should have default styles for td', () => {
    cy.get("td")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(1)} ${remToPx(0.5)}`);

    cy.get("td")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'top');
  });

  it('should have default styles for th', () => {
    cy.get("th")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(1)} ${remToPx(0.5)}`);

    cy.get("th")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'top');

    cy.get("th")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLDER);

    cy.get("th")
      .first()
      .invoke('css', 'text-align')
      .should('equal', 'left');
  });
});