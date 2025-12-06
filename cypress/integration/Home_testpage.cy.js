describe("Home page", () => {
  it("tests Home page", () => {
    cy.viewport(770, 729);
    cy.visit("http://localhost:5173/");
    cy.get("main a:nth-of-type(1)").click();
    cy.get("li:nth-of-type(1) > a").click();
    cy.get("a:nth-of-type(2)").click();
    cy.get("li:nth-of-type(1) > a").click();
    cy.get("a:nth-of-type(3)").click();
    cy.get("li:nth-of-type(1) > a").click();
    cy.get("a:nth-of-type(4)").click();
    cy.get("li:nth-of-type(1) > a").click();
    cy.get("a:nth-of-type(5)").click();
    cy.get("li:nth-of-type(1) > a").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMBNB
