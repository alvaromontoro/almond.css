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

describe("inputs", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    
    cy.get("input")
      .first()
      .invoke('css', 'border')
      .should('equal', `1px solid ${SECONDARY_LIGHT}`);
      
    cy.get("input")
      .first()
      .invoke('css', 'border-radius')
      .should('equal', BORDER_RADIUS);

    cy.get("input")
      .first()
      .invoke('css', 'box-sizing')
      .should('equal', 'border-box');

    cy.get("input")
      .first()
      .invoke('css', 'font-size')
      .should('equal', remToPx(1));

    cy.get("input")
      .first()
      .invoke('css', 'height')
      .should('equal', remToPx(2.5));

    cy.get("input")
      .first()
      .invoke('css', 'line-height')
      .should('equal', 'normal');

    cy.get("input")
      .first()
      .invoke('css', 'margin')
      .should('equal', remToPx(0));

    cy.get("input")
      .first()
      .invoke('css', 'padding')
      .should('equal', `${remToPx(0)} ${remToPx(0.5)}`);

    cy.get("input")
      .first()
      .invoke('css', 'min-width')
      .should('equal', remToPx(15));

    cy.get("input")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'middle');

    cy.get("input")
      .first()
      .invoke('css', 'width')
      .should('equal', remToPx(15));
  });

  it('should have special styles for different states', () => {
    cy.get("input:invalid")
      .first()
      .invoke('css', 'border-color')
      .should('equal', ERROR_COLOR);

    cy.get("input[disabled]")
      .first()
      .invoke('css', 'background')
      .should('contain', SECONDARY_LIGHTER);

    cy.get("input[disabled]")
      .first()
      .invoke('css', 'color')
      .should('equal', SECONDARY_LIGHT);
  });

  it('should have smaller padding when input color', () => {
    cy.get("input[type=color]")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0.125));
  });

  it('should have no padding when input range', () => {
    cy.get("input[type=range]")
      .first()
      .invoke('css', 'padding')
      .should('equal', remToPx(0));
  });

  it('should have the appearance of a textfield when input search', () => {
    cy.get("input[type=search]")
      .first()
      .invoke('css', '-webkit-appearance')
      .should('equal', 'textfield');
  });

  it('should have special styles for inputs with special icons', () => {
    // testing only date, it worked for the others, add tests if specific to type
    cy.get("input[type=date]")
      .first()
      .invoke('css', 'padding-left')
      .should('equal', remToPx(2.5));

    cy.get("input[type=date]")
      .first()
      .invoke('css', 'background-repeat')
      .should('equal', 'no-repeat');

    cy.get("input[type=date]")
      .first()
      .invoke('css', 'background-size')
      .should('equal', `${remToPx(1.5)} ${remToPx(1.5)}`);

    cy.get("input[type=date]")
      .first()
      .invoke('css', 'background-position')
      .should('equal', `${remToPx(0.5)} 50%`);
      
    cy.get("input[type=date]")
      .first()
      .invoke('css', '-webkit-print-color-adjust')
      .should('equal', 'exact');
  })

  it('should render the right icon for each specific input', () => {
    // all the date inputs have the same icon
    cy.get("input[type=date]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M1,5 37,5 37,37 1,37 Z M1,13 37,13 37,21 1,21 1,29 37');

    cy.get("input[type=datetime-local]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M1,5 37,5 37,37 1,37 Z M1,13 37,13 37,21 1,21 1,29 37');
    
    cy.get("input[type=month]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M1,5 37,5 37,37 1,37 Z M1,13 37,13 37,21 1,21 1,29 37');

    cy.get("input[type=week]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M1,5 37,5 37,37 1,37 Z M1,13 37,13 37,21 1,21 1,29 37');

    cy.get("input[type=email]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M1,5 39,5 39,35 1,35 1,5 20,22 39,5');

    cy.get("input[type=time]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M21,20 8.5,20');
    
    cy.get("input[type=search]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M36,36 20,20');

    cy.get("input[type=password]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M5,19 35,19 35,39 5,39Z M20,25 20,30');

    cy.get("input[type=tel]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M8,1 34,1 34,39 8,39Z M12,5 30,5 30,30 12,30Z');
    
    cy.get("input[type=url]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M2,20 38,20 M20,2 C7,2 7,38 20,38 33,38 33,2 20,2 20,2');

    cy.get("input[type=number]")
      .first()
      .invoke('css', 'background-image')
      .should('contain', 'M26,4 21,36 M15,4 10,36 M4,15 36,15 M2,26 34,26');
  });
  
});