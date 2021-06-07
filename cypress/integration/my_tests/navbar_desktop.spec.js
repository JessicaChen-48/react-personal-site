/// <reference types="cypress" />

describe("Loads navbar on Raw Desktop Site", () => {

  beforeEach(() => {
    cy.visit("http://jessicaazchen.com")
    cy.viewport("macbook-16")
  })

  it("loads all links", () => {
    cy.get("ul > li.nav-item").should("have.length", 4)
  })

  it("hides hamburger icon", () => {
    cy.get(".menu-icon").should("be.hidden");
  })

  it("click home", () => {
    cy.get('a:contains("Home")').click()
  })

  it("click about", () => {
    cy.get('a:contains("About Me")').click()
  })

  it("click projects", () => {
    cy.get('a:contains("Projects")').click()
  })

  it("click contact", () => {
    cy.get('a:contains("Contact")').click()
  })

})