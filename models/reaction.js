'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post}) {
      // define association here
      this.belongsTo(post,{foreignKey:"post_id"})
    }
  };
  reaction.init({
    reaction_id:{
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey:true
    },
    type_Of_reaction:{type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'reaction',
  });
  return reaction;
};