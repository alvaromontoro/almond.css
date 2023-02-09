describe("video", () => {
  before(() => {
    cy.visit("/demo/old/index.html");
  });
  
  it('should have default styles', () => {
    cy.get("video")
      .first()
      .invoke('css', 'display')
      .should('equal', 'inline-block');

    cy.get("video")
      .first()
      .invoke('css', 'vertical-align')
      .should('equal', 'baseline');

    cy.get("video")
      .first()
      .invoke('css', 'max-width')
      .should('equal', '100%');
  });
});