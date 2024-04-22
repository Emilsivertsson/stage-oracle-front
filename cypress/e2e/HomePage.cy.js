describe('Homepage', () => {
  it('Render the startpage', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Welcome to Stage Oracle')
  })
})