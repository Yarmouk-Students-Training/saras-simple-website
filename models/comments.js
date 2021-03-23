'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
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
  comments.init({
    commentsId:{
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey:true
    },
    content2:{type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};