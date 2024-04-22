describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/deleteAccount')

    cy.get('h1').contains('Delete Account')

  })
})