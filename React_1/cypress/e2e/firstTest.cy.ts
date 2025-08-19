describe("Cypress Test", () => {
  it("renders the default elements on screen", () => {
    cy.visit("http://localhost:5173/cypress-test");
    cy.get('[data-testid="cypress-test"]')
      .should("exist")
      .should("have.text", "Cypress Test");
  });

  it("renders the todos on the screen", () => {
    cy.visit("http://localhost:5173/cypress-test");
    cy.get('[data-testid="todo-1"]').should("exist");
  });
});
