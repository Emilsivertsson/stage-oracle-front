describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/kkas')
    cy.get('h1').contains('Page Not Found')
    cy.get('p').contains('The page you are looking for does not exist or you might not be logged in correctly')
    cy.get('Button').contains('Go to Home')
    cy.url().should('include', '')
  })
})