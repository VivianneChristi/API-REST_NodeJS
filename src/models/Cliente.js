module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      ID_Cliente: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Nome_Cliente: DataTypes.STRING,
      Email: DataTypes.STRING,
    });
    return Cliente;
  };
  