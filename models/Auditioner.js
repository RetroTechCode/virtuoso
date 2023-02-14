const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Auditioner extends Model {checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}
}

// create fields/columns for Band model
Auditioner.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instrument: {
        type: DataTypes.STRING,
        allowNull: false
      },
      band_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'band',
          key: 'id'
        }
      },
      years_played: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'auditioner'
    }
  );

  module.exports = Auditioner;