const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const models = {
  Cliente: require('./Cliente')(sequelize, DataTypes),
  Conta: require('./Conta')(sequelize, DataTypes),
  Transacao: require('./Transacao')(sequelize, DataTypes),
  Notificacao: require('./Notificacao')(sequelize, DataTypes),
  Administrador: require('./Administrador')(sequelize, DataTypes),
};

// Configurar associações
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
