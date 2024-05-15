'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.hasMany(models.Transaction, { foreignKey: "gameId"})
    }
  }
  Game.init({
    name: DataTypes.STRING,
    released: DataTypes.STRING,
    background_image: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    genre: DataTypes.STRING,
    imgUrl_1: DataTypes.STRING,
    imgUrl_2: DataTypes.STRING,
    imgUrl_3: DataTypes.STRING,
    imgUrl_4: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};