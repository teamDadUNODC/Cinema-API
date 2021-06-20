'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserRoles.init({
    UserId: DataTypes.INTEGER,
    RoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRoles',
  });
  return UserRoles;
};