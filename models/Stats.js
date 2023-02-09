const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      month_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      monthly_spotify_listeners: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      monthly_avg_stage_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_band_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'band',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats'
  }
);

module.exports = Stats;