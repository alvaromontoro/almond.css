describe("a", () => {
  before(() => {
    cy.visit("/index.html");
  });

  it('should have proper link color', () => {
    cy.get("a")
      .first()
      .invoke('css', 'color')
      .should('equal', 'rgb(51, 102, 153)')
  });
});
