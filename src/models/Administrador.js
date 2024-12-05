module.exports = (sequelize, DataTypes) => {
    const Administrador = sequelize.define('Administrador', {
      ID_Administrador: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      Nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Administrador;
  };
  