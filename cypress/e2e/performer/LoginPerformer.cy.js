describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/loginPerformer')
    cy.get('h1').contains('Login Performer')

    cy.get('form').find('input[name="username"]').type('testUsername')
    cy.get('form').find('input[name="password"]').type('testPassword1')

    cy.get('form').find('button[type="submit"]').should('be.enabled')

    cy.get('form').find('input[name="username"]').should('have.value', 'testUsername')
    cy.get('form').find('input[name="password"]').should('have.value', 'testPassword1')
  })
})