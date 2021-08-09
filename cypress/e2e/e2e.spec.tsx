describe("full app working", () => {
  it("should works :)", () => {
    cy.visit("/")
      // redirect to login page by default
      .url()
      .should("include", "/login");
  });
});
