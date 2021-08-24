module.exports = (sequelize, DataTypes) => {
  const Alunos = sequelize.define("Aluno", {
    nome: { type: DataTypes.STRING, allowNull: false },
    sobrenome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    ano_matricula: { type: DataTypes.INTEGER, allowNull: false },
  });

  Alunos.associate = models => {
    Alunos.hasMany(models.Atendimento, {
      as: 'Atendimentos',
      foreignKey: 'aluno_id'
    });
  }

  return Alunos;
};
