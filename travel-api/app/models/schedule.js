'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Bookings, {
        foreignKey: 'scheId'
      });
      this.belongsTo(models.Destinations, {
        foreignKey: 'destId'
      });
      this.belongsTo(models.Vehicles, {
        foreignKey: 'vehiId'
      });
    }
  }
  Schedule.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Destinations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    vehcId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vehicles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedule;
};