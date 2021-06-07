/// <reference types="cypress" />

describe("Loads navbar on raw mobile site", () => {

  beforeEach(() => {
    cy.visit("http://jessicaazchen.com")
    cy.viewport("iphone-x")
  })

  it("loads all links", () => {
    cy.get("ul > li.nav-item").should("have.length", 4)
  })

  it("shows hamburger icon", () => {
    cy.get(".menu-icon").should("be.not.hidden");
    cy.get(".menu-icon > i").should("have.class", "fa-bars")
  })

  it("can click hamburger menu", () => {
    cy.get(".menu-icon").click()
    cy.get(".menu-icon > i").should("have.class", "fa-times")
  })

  it("can exit hamburger menu", () => {
    cy.get(".menu-icon").click()
    cy.get(".menu-icon > i").should("have.class", "fa-times")
    cy.get(".menu-icon > i").click();
    cy.get(".menu-icon > i").should("have.not.class", "fa-times")
  })

  it("clicks home", () => {
    cy.get(".menu-icon").click()
    cy.get('a:contains("Home")').click()
    cy.get(".menu-icon > i").should("have.class", "fa-bars")
  })

  it("clicks about me", () => {
    cy.get(".menu-icon").click()
    cy.get('a:contains("About Me")').click()
    cy.get(".menu-icon > i").should("have.class", "fa-bars")
  })

  it("clicks Projects", () => {
    cy.get(".menu-icon").click()
    cy.get('a:contains("Projects")').click()
    cy.get(".menu-icon > i").should("have.class", "fa-bars")
  })

  it("clicks Contact", () => {
    cy.get(".menu-icon").click()
    cy.get('a:contains("Contact")').click()
    cy.get(".menu-icon > i").should("have.class", "fa-bars")
  })

})