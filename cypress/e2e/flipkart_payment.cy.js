import "cypress-real-events/support";

describe("Flipkart Payment Order Flow", () => {
  beforeEach(() => {
    cy.fixture("user").as("userData");
  });

  it("Flipkart Payment Success", function () {
    cy.visit("https://flipkart.com");
    cy.get('[class="Pke_EE"]').type("Tripod{enter}");
    cy.url().should("include", "search?q=Tripod");
    cy.get("div._75nlfW")
      .first()
      .find("a")
      .first()
      .invoke("removeAttr", "target")
      .click();
    cy.contains("Buy Now").realClick();
    cy.log("Searching product and initiating buy flow");

    cy.wait(5000);
    cy.get(".r4vIwl").type(this.userData.phone);
    cy.contains("span", "CONTINUE").click();
    cy.wait(30000);
    cy.contains("button > span", "Login").click();
    cy.contains("div", "Add a new address").click();
    cy.fillAddress(this.userData);
    cy.log("Login and address form filled");

    cy.get('[id="to-payment"]').contains("button", "CONTINUE").click();
    cy.contains("span", "UPI").click();
    cy.contains("div", "Your UPI ID").click();
    cy.get('[name="upi-id"]').type(this.userData.upi);
    cy.contains("div", "Verify").click();
    cy.wait(3000);
    cy.contains("button", "PAY").click();
    cy.log("UPI payment initiated");

    cy.url({ timeout: 60000 }).should("include", "/orderresponse");
    // cy.contains("span", "Thanks for shopping with us!").should("be.visible");
    cy.screenshot("payment-success");
  });

  it("Flipkart Payment Failure", function () {
    cy.visit("https://flipkart.com");
    cy.get('[class="Pke_EE"]').type("Tripod{enter}");
    cy.url().should("include", "search?q=Tripod");
    cy.get("div._75nlfW")
      .first()
      .find("a")
      .first()
      .invoke("removeAttr", "target")
      .click();
    cy.contains("Buy Now").realClick();
    cy.log("Searching product and initiating buy flow");

    cy.wait(5000);
    cy.get(".r4vIwl").type(this.userData.phone);
    cy.contains("span", "CONTINUE").click();
    cy.wait(30000);
    cy.contains("button > span", "Login").click();
    cy.contains("div", "Add a new address").click();
    cy.fillAddress(this.userData);
    cy.log("Login and address form filled");

    cy.get('[id="to-payment"]').contains("button", "CONTINUE").click();
    cy.contains("span", "UPI").click();
    cy.contains("div", "Your UPI ID").click();
    cy.get('[name="upi-id"]').type(this.userData.upi);
    cy.contains("div", "Verify").click();
    cy.wait(3000);
    cy.contains("button", "PAY").click();
    cy.log("UPI payment initiated");

    cy.url({ timeout: 60000 }).should("include", "/checkout");
  });
});
