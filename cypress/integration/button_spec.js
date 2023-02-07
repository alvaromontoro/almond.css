import {
  BORDER_RADIUS,
  ERROR_COLOR,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_BOLDER,
  PRIMARY_COLOR,
  PRIMARY_BG,
  PRIMARY_DARK,
  PRIMARY_LIGHTER,
  SECONDARY_COLOR,
  SECONDARY_LIGHT,
  SECONDARY_LIGHTER,
  remToPx
} from "../support/constants";

describe("buttons", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for input type=button', () => {
    cy.get("input[type='button']")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'button');

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${PRIMARY_COLOR}`);
      
    cy.get("input[type='button']")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_COLOR);

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_BG);

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.8));

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'cursor')
      .should('contain', 'pointer');

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(2.5));

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)}`);

    cy.get("input[type='button']")
      .first()
      .invoke('css', 'text-transform')
      .should('equal', 'uppercase');
  });

  it('should have disabled styles for input type=button', () => {
    cy.get("input[type='button']:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[type='button']:disabled")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHTER}`);

    cy.get("input[type='button']:disabled")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);
  });




  it('should have default styles for input type=reset', () => {
    cy.get("input[type='reset']")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'button');

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${PRIMARY_COLOR}`);
      
    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_BG);

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_COLOR);

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.8));

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'cursor')
      .should('contain', 'pointer');

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(2.5));

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)}`);

    cy.get("input[type='reset']")
      .first()
      .invoke('css', 'text-transform')
      .should('equal', 'uppercase');
  });

  it('should have disabled styles for input type=reset', () => {
    cy.get("input[type='reset']:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[type='reset']:disabled")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHTER}`);

    cy.get("input[type='reset']:disabled")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);
  });




  it('should have default styles for input type=submit', () => {
    cy.get("input[type='submit']")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'button');

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${PRIMARY_COLOR}`);
      
    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_COLOR);

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_BG);

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.8));

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'cursor')
      .should('contain', 'pointer');

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(2.5));

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)}`);

    cy.get("input[type='submit']")
      .first()
      .invoke('css', 'text-transform')
      .should('equal', 'uppercase');
  });

  it('should have disabled styles for input type=submit', () => {
    cy.get("input[type='submit']:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[type='submit']:disabled")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHTER}`);

    cy.get("input[type='submit']:disabled")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);
  });

  

  it('should have default styles for input type=button', () => {
    cy.get("button")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'button');

    cy.get("button")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${PRIMARY_COLOR}`);
      
    cy.get("button")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_COLOR);

    cy.get("button")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("button")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("button")
      .first()
      .invoke('css', 'color')
      .should('equal', PRIMARY_BG);

    cy.get("button")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("button")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(0.8));

    cy.get("button")
      .first()
      .invoke('css', 'cursor')
      .should('contain', 'pointer');

    cy.get("button")
      .first()
      .invoke('css', 'font-weight')
      .should('equal', FONT_WEIGHT_BOLD);

    cy.get("button")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("button")
      .first()
      .invoke('css', 'min-height')
      .should('equal', remToPx(2.5));

    cy.get("button")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(1)}`);

    cy.get("button")
      .first()
      .invoke('css', 'text-transform')
      .should('equal', 'uppercase');
  });

  it('should have disabled styles for input type=button', () => {
    cy.get("button:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("button:disabled")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHTER}`);

    cy.get("button:disabled")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);
  });
});