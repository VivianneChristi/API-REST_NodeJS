module.exports = (sequelize, DataTypes) => {
    const Notificacao = sequelize.define('Notificacao', {
      ID_Notificacao: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      ID_Cliente: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      Mensagem: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Data_Notificacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Notificacao.associate = (models) => {
      Notificacao.belongsTo(models.Cliente, {
        foreignKey: 'ID_Cliente',
        as: 'cliente',
      });
    };
  
    return Notificacao;
  };
  