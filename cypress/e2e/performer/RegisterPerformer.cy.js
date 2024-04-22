describe('Register Performer spec', () => {
  it('registers a new performer', () => {

    cy.visit('http://localhost:3000/registerPerformer')

    cy.get('form').find('input[name="username"]').type('testUsername')
    cy.get('form').find('input[name="password"]').type('testPassword1')
    cy.get('form').find('input[type="checkbox"]').check()

    cy.get('form').find('button[type="submit"]').should('be.enabled')

    cy.get('form').find('input[name="username"]').should('have.value', 'testUsername')
  })
})