module.exports = (sequelize, DataTypes) => {
  const Atendimentos = sequelize.define("Atendimento", {
    descricao: { type: DataTypes.STRING, allowNull: false },    
  });

  Atendimentos.associate = models => {
    Atendimentos.belongsTo(models.Aluno, {
      as: 'Aluno',
      foreignKey: 'aluno_id'
    });
  }

  return Atendimentos;
};
