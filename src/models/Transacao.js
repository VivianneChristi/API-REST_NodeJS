module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {
      ID_Transacao: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ID_Conta: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      Tipo_Conta: {
        type: DataTypes.ENUM(
          'Corrente',
          'Poupança',
          'Salário',
          'Mista',
          'Digital',
          'Universitária',
          'Conjunta',
          'Solidária'
        ),
        allowNull: false,
      },
      Tipo_Transacao: {
        type: DataTypes.ENUM('Crédito', 'Débito'),
        allowNull: false,
      },
      Valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Data_Transacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Transacao.associate = (models) => {
      Transacao.belongsTo(models.Conta, {
        foreignKey: 'ID_Conta',
        as: 'conta',
      });
    };
  
    return Transacao;
  };
  