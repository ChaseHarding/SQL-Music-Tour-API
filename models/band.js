'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
   
    static associate({ Meet_Greet, Set_Time }) {
      //Meet_Greet
      Band.hasMany(Meet_Greet, {
        foreignKey: 'band_id',
        as: 'meet_greets'
      });

      //Set_Time
      Band.hasMany(Set_Time, {
        foreignKey: 'band_id',
        as: 'set_times'
      });
    }
  }
  Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false,
  });
  return Band;
};