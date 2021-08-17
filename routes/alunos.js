const express = require('express');
const router = express.Router();
const alunosController = require('../controllers/alunos');

router.get('/', async (req, res) => {
  const alunos = await alunosController.listarTodos().then(rows => rows.map(row => row.dataValues));
  console.log(alunos);
  res.render('alunos', { alunos });
});

module.exports = router;

