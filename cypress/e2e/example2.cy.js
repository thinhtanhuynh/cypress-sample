describe('My Second Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://uat.kikker.nl')

    cy.contains('Kikker Energie').should('be.visible')
  })
})

describe('My Third Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://portal.ke-pre-prod.infodation.com')

    cy.contains('Kikker Energie').should('be.visible')
  })
})

