import faker from "faker";

describe("full app working", () => {
  it("should works :)", () => {
    const email = faker.internet.email();
    const password = "Te$$t1ng";
    console.log(password);
    cy.visit("/")
      // redirect to login page by default
      .url()
      .should("include", "/login")
      //create a new user
      .visit("/register")
      .get("#email")
      .type(email)
      .get("#password")
      .type(password)
      .get("#submit")
      .click();
  });
});
