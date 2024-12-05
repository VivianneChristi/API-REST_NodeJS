module.exports = (sequelize, DataTypes) => {
    const Conta = sequelize.define('Conta', {
      ID_Conta: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ID_Cliente: DataTypes.UUID,
      Saldo: DataTypes.FLOAT,
    });
    Conta.associate = (models) => {
      Conta.belongsTo(models.Cliente, { foreignKey: 'ID_Cliente' });
    };
    return Conta;
  };
  