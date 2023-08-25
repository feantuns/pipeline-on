it("should load the page", () => {
    cy.visit("/");
    cy.findAllByText(/pipeline on/i).should("have.length", 1);
});