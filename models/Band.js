const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Band extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for Band model
Band.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      need_date: {
        type: DataTypes.DATE,
        allowNull: true,
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
      // create hooks that will hash password
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'band'
    }
  );

  module.exports = Band;