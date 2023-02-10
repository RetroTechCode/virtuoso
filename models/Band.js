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
        type: DataTypes.STRING,
        allowNull: true
      },
      // fk_genre: {
      //   type: DataTypes.STRING,        
      //   allowNull: false,
      //   references: {
      //     model: 'band',
      //     key: 'genre'
      //   }
      // },
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
      auditioner_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'auditioner',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'band'
    }
  );

  module.exports = Band;