const request = require('supertest');
const app = require('../controllers/userControl');

describe('API Usuários', () => {
  it('deve criar um novo usuário', async () => {
    const resposta = await request(app)
      .post('/api/usuarios')
      .send({ nome: 'Novo Usuário', email: 'usuario@exemplo.com' });

    expect(resposta.status).toBe(201);
    expect(resposta.body).toHaveProperty('id');
  });

  it('deve retornar a lista de usuários', async () => {
    
    const resposta = await request(app).get('/api/usuarios');

    expect(resposta.status).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});

describe('API Projetos', () => {
    it('deve criar um novo projeto', async () => {
      const resposta = await request(app)
        .post('/api/projetos')
        .send({ nome: 'Projeto Exemplo', descricao: 'Descrição do projeto' });
  
      expect(resposta.status).toBe(201);
      expect(resposta.body).toHaveProperty('id');
    });
  
    it('deve retornar a lista de projetos', async () => {
      const resposta = await request(app).get('/api/projetos');
  
      expect(resposta.status).toBe(200);
      expect(Array.isArray(resposta.body)).toBe(true);
    });
  });

  describe('API Comentários', () => {
    it('deve criar um novo comentário em um projeto', async () => {
      const resposta = await request(app)
        .post('/api/projetos/1/comentarios')
        .send({ texto: 'Comentário de teste' });
  
      expect(resposta.status).toBe(201);
      expect(resposta.body).toHaveProperty('id');
    });
  
    it('deve retornar os comentários de um projeto', async () => {
      const resposta = await request(app).get('/api/projetos/1/comentarios');
  
      expect(resposta.status).toBe(200);
      expect(Array.isArray(resposta.body)).toBe(true);
    });
  });
  