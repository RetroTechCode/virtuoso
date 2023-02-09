const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Band extends Model {}

// create fields/columns for Band model
Band.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      band_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      manager_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      need_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      },
      fk_instrument: {
        type: DataTypes.STRING,
        references: {
          model: 'auditioner',
          key: 'instrument'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'band'
    }
  );

  module.exports = Band;