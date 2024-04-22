describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/terms')
    cy.get('h1').contains('Terms and Conditions')

  })
})