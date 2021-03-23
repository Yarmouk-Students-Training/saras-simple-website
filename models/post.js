'use strict';
const {
  Model
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
    post_Id:{
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey:true
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