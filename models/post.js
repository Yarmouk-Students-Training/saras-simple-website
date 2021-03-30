'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({users,comments,reaction}) {
      // define association here
      this.belongsTo(users,{foreignKey:"user_id"})
      this.hasMany(comments,{foreignKey:"post_id"})
      this.hasMany(reaction,{foreignKey:"post_id"})
    }
  };
  post.init({
    user_id:{
      type:DataTypes.STRING,
      allowNull:false
    },
    post_id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      unique: true,
      primaryKey:true,
    },
    content:{
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};