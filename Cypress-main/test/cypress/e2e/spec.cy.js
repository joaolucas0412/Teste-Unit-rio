describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Sign In').click()
    cy.url().should('include', '/signin')
    cy.get('#email').type('teste26@teste.com')
    cy.get('#password').type('12345')
    cy.get('#Logar').click()
    cy.contains('Projects').click()
    cy.contains('Create Project').click()
    // Preencher os campos do formulário         
    cy.get('[data-cy=nameProject]').type('Meu Projeto');
    cy.get('[data-cy=descriProject]').click().type('Descrição do meu projeto');
    cy.get('[data-cy=owner]').select('Teste21');
    cy.get('[data-cy=manager]').click().type('teste(enter)');
    cy.get('[data-cy=members]').click().type('teste(enter)');
    cy.get('[data-cy=criar]').click()
    // Validar que o projeto foi criado         
    cy.contains('Meu Projeto').should('exist');
  })
});