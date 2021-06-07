/// <reference types="cypress" />

describe("Loads all Components on Raw Desktop Site", () => {

  beforeEach(() => {
    cy.visit("http://jessicaazchen.com")
    cy.viewport("macbook-16")
  })

  it("raw site", () => {
    cy.visit("http://jessicaazchen.com")
  })

  it("navbar", () => {
    cy.get("nav")
      .should("contain.html", "<ul class=\"nav-menu\">")
  })

  it("welcome header ", () => {
    cy.get("h1").should("contain.text", "I'm Jessica")
  })

  it("hero buttons", () => {
    cy.get("button").should("contain.text", "ABOUT ME")
    cy.get("button").should("contain.text", "RECENT PROJECTS")
  })

  it("about me", () => {
    cy.get("h1").should("contain.text", "ABOUT ME")
  })

  it("projects cards", () => {
    cy.get("h1").should("contain.text", "RECENT PROJECTS")
  })

  it("footer", () => {
    cy.get("h1").should("contain.text", "CONTACT ME")
  })
  
})