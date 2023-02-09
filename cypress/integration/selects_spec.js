import {
  BORDER_RADIUS,
  ERROR_COLOR,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_BOLDER,
  SECONDARY_LIGHT,
  SECONDARY_LIGHTER,
  remToPx
} from "../support/constants";

describe("inputs", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles for optgroup', () => {
    cy.get("optgroup")
      .first()
      .invoke('css', 'border-width')
      .should('equal', remToPx(0));

    cy.get("optgroup")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', remToPx(0));

    cy.get("optgroup")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLDER);

    cy.get("optgroup")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0.5));
  });

  it('should have default styles for option', () => {
    cy.get("option")
      .first()
      .invoke('css', 'border-width')
      .should('equal', remToPx(0));

    cy.get("option")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', remToPx(0));

    cy.get("option")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_REGULAR);

    cy.get("option")
      .first()
      .invoke('css', 'align-items')
      .should('equal', 'center');

    cy.get("option")
      .first()
      .invoke('css', 'display')
      .should('equal', 'flex');

    cy.get("option")
      .first()
      .invoke('css', 'justify-content')
      .should('equal', 'flex-start');
  });

  it('should have default styles for select (multiple)', () => {
    cy.get("select[multiple]")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(10));

    cy.get("select[multiple]")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0));
  });

  it('should have default styles for select', () => {
    cy.get("select")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("select")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("select")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("select")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("select")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(2.5));

    cy.get("select")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("select")
      .first()
      .invoke('css', 'min-width')
      .should('equal', remToPx(15));

    cy.get("select")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'middle');

    cy.get("select:not([multiple])")
      .first()
      .invoke('css', 'appearance')
      .should('equal', 'none');

    cy.get("select:not([multiple])")
      .first()
      .invoke('css', 'padding-right')
      .should('equal', remToPx(2));

    cy.get("select:not([multiple])")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'svg');
  });

  it('should render differently for different select states', () => {
    cy.get("select:invalid")
      .first()
      .invoke('css', 'border-color')
      .should('equal', ERROR_COLOR);

    cy.get("select[disabled]")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);

    cy.get("select[disabled]")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);
  });
});