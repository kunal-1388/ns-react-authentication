describe("Redirect to login page when the user is not logged in", () => {
    it("Redirect to login page when the user is not logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#profile");
        cy.get("#profile").click();
        cy.location("pathname").should("eq", "/login");
    });
});

describe("Redirect to profile page when the user is logged in", () => {
    it("Redirect to profile page when the user is logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#login").click();
        cy.get("#username").type("abc");
        cy.get("#password").type("123");
        cy.get("#submit").click();
        cy.visit("http://localhost:3000/");
        cy.get("#profile").click();
        cy.location("pathname").should("eq", "/profile");
    });
});
