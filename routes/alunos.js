const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunos');

router.get('/', async (req, res) => {
  const alunos = await alunosController.listarTodos();
  res.render('alunos', { alunos });
});

router.post('/', async (req, res) => {
  const { nome, sobrenome, email, ano_matricula } = req.body;
  // validação joi, express validator, express open api validator
  await alunosController.cadastrarAluno({ nome, sobrenome, email, ano_matricula });
  const alunos = await alunosController.listarTodos();
  res.render('alunos', { alunos });
});

router.get('/matricular/:id', async (req, res) => {
  const { id } = req.params;

  await alunosController.atualizarAluno({ id, ano_matricula: 2021 });
  res.redirect('/alunos');
});

router.get('/deletar/:id', async (req, res) => {
  const { id } = req.params;

  await alunosController.deletarAluno(id);
  res.redirect('/alunos');
});


module.exports = router;
