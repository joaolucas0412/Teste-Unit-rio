const { removeDuplicates } = require('../controllers/projectsControl');

describe('projectsControl.removeDuplicates', () => {
  test('deve remover itens duplicados da lista', () => {
    const projetos = [
      { id: 1, nome: 'Projeto 1' },
      { id: 2, nome: 'Projeto 2' },
      { id: 1, nome: 'Projeto 1' } // Duplicado
    ];
    
    const resultado = removeDuplicates(projetos);

    expect(resultado).toEqual([
      { id: 1, nome: 'Projeto 1' },
      { id: 2, nome: 'Projeto 2' }
    ]);
  });
});
