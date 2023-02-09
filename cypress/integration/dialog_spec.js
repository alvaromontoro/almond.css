import {
  BORDER_RADIUS,
  PRIMARY_BG,
  SECONDARY_COLOR,
  SECONDARY_LIGHT,
  remToPx
} from "../support/constants";

describe("dialog", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });

  it('should have default styles', () => {
    cy.get("dialog")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("dialog")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("dialog")
      .first()
      .invoke('css', 'top')
      .should('equal', '50%');

    cy.get("dialog")
      .first()
      .invoke('css', 'left')
      .should('equal', '50%');

    cy.get("dialog")
      .first()
      .invoke('css', 'position')
      .should('equal', 'fixed');

    cy.get("dialog")
      .first()
      .invoke('css', 'display')
      .should('equal', `none`);

    cy.get("dialog")
      .first()
      .invoke('css', 'z-index')
      .should('equal', '1');

    cy.get("dialog")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("dialog")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(1));
  });

  it('should have default styles for after pseudo', () => {
    cy.get("dialog")
      .first()
      .after('content')
      .should('equal', '');

    cy.get("dialog")
      .first()
      .after('background')
      .should('contain', PRIMARY_BG);

    cy.get("dialog")
      .first()
      .after('border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("dialog")
      .first()
      .after('height')
      .should('equal', '100%');

    cy.get("dialog")
      .first()
      .after('left')
      .should('equal', '0px');

    cy.get("dialog")
      .first()
      .after('top')
      .should('equal', '0px');

    cy.get("dialog")
      .first()
      .after('position')
      .should('equal', 'absolute');

    cy.get("dialog")
      .first()
      .after('z-index')
      .should('equal', '-1');
  });

  it('should have default styles for before pseudo', () => {
    cy.get("dialog")
      .first()
      .before('content')
      .should('equal', '');

    cy.get("dialog")
      .first()
      .before('background')
      .should('contain', SECONDARY_COLOR);

    cy.get("dialog")
      .first()
      .before('left')
      .should('equal', '50%');

    cy.get("dialog")
      .first()
      .before('top')
      .should('equal', '50%');

    cy.get("dialog")
      .first()
      .before('position')
      .should('equal', 'absolute');

    cy.get("dialog")
      .first()
      .before('opacity')
      .should('equal', '0.33');

    cy.get("dialog")
      .first()
      .before('z-index')
      .should('equal', '-1');
  });

  it('should update styles on open', () => {
    cy.get("dialog")
      .first()
      .invoke('css', 'display')
      .should('equal', 'none');

    cy.get("dialog ~ button")
      .first()
      .click();

    cy.get("dialog")
      .first()
      .invoke('css', 'display')
      .should('equal', 'flex');

    cy.get("dialog")
      .first()
      .invoke('css', 'flex-direction')
      .should('equal', 'column');
  });

  it('should update styles for headings', () => {
    cy.get("dialog h2")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', `${BORDER_RADIUS} ${BORDER_RADIUS} 0px 0px`);

    cy.get("dialog h2")
      .first()
      .invoke('css', 'border-bottom')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);

    cy.get("dialog h2")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_COLOR);

    cy.get("dialog h2")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1.125));

    cy.get("dialog h2")
      .first()
      .invoke('css', 'margin')
      .should('equal', `${remToPx(-1)} ${remToPx(-1)} ${remToPx(1)}`);

    cy.get("dialog h2")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0.5)} ${remToPx(1)}`);
  });
});