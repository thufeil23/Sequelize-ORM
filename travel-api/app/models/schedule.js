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
      this.hasMany(models.Bookings);
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
    },
    destId: DataTypes.INTEGER,
    vehcId: DataTypes.INTEGER,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};