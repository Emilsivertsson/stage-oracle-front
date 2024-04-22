describe('Header', () => {
    it('Render the Header', () => {
        cy.visit('http://localhost:3000/')
        cy.get('title').contains('Stage Oracle')
    })
})