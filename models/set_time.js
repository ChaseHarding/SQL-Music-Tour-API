'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
  
    static associate({ Band, Event, Stage }) {
      //Band
      Set_Time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'bands'
      })

      //Event
      Set_Time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'events'
      })

      //Stage
      Set_Time.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stages'
      })
    }
  }
  Set_Time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_times',
    timestamps: false,
  });
  return Set_Time;
};