'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status.belongsTo(models.User, {
        through: 'users',
        foreignKey: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      });
    }
  }
  Status.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};