const db = require('../database/models');

exports.listarTodos = () => db.Aluno.findAll();
