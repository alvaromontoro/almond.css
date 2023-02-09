import {
  BORDER_RADIUS,
  PRIMARY_COLOR,
  SECONDARY_LIGHT,
  remToPx,
  SECONDARY_BG,
  SECONDARY_LIGHTER
} from "../support/constants";

describe("radio and checkbox", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles for checkbox', () => {
    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'box-shadow')
      .should('equal', `${SECONDARY_BG} ${remToPx(0)} ${remToPx(0)} ${remToPx(0)} ${remToPx(0.185)} inset`);

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_BG);

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'text-top');
  
    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'none');

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'border-width')
      .should('equal', '1px');

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(1));

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'width')
      .should('equal', remToPx(1));

    cy.get("input[type='checkbox']")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0));
  });

  it('should have default styles for radio', () => {
    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'box-shadow')
      .should('equal', `${SECONDARY_BG} ${remToPx(0)} ${remToPx(0)} ${remToPx(0)} ${remToPx(0.185)} inset`);

    cy.get("input[type='radio']:not([checked])")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_BG);

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'text-top');
  
    cy.get("input[type='radio']")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'none');

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', '50%');

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'border-width')
      .should('equal', '1px');

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(1));

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'width')
      .should('equal', remToPx(1));

    cy.get("input[type='radio']")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0));
  });

  it('should have specific styles for checkbox checked', () => {
    cy.get("input[type='checkbox']:checked")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_COLOR);

    cy.get("input[type='checkbox']:checked")
      .first()
      .invoke('css', '-webkit-print-color-adjust')
      .should('equal', 'exact');
  });

  it('should have specific styles for radio selected', () => {
    cy.get("input[type='radio']:checked")
      .first()
      .invoke('css', 'background')
      .should('contain', PRIMARY_COLOR);

    cy.get("input[type='radio']:checked")
      .first()
      .invoke('css', '-webkit-print-color-adjust')
      .should('equal', 'exact');
  });

  it('should have specific styles for checkbox disabled', () => {
    cy.get("input[type='checkbox']:disabled")
      .first()
      .invoke('css', 'box-shadow')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[type='checkbox']:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);
  });

  it('should have specific styles for checkbox disabled', () => {
    cy.get("input[type='radio']:disabled")
      .first()
      .invoke('css', 'box-shadow')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[type='radio']:disabled")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);
  });
});