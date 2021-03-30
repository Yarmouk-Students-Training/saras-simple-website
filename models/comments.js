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
    static associate({post,users}) {
      // define association here
      this.belongsTo(post,{foreignKey:"post_id"})
      this.belongsTo(users,{foreignKey:"user_id"})
    }
  };
  comments.init({
    comments_id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      unique: true,
      primaryKey:true,
    },
    content2:{type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};