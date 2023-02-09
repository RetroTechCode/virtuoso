const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Auditioner extends Model {}

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
      years_played: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_genre: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'band',
          key: 'genre'
        }
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