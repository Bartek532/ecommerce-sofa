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
      .click()
      .get("#close-modal")
      .click()
      //login with new user
      .visit("/login")
      .get("#email")
      .type(email)
      .get("#password")
      .type(password)
      .get("#submit")
      .click()
      .wait(1000)
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
