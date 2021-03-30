'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post,friends,comments,reaction}) {
      // define association here
      this.hasMany(post,{foreignKey:"user_id"})
      this.hasMany(comments,{foreignKey:"user_id"})
      this.hasMany(reaction,{foreignKey:"user_id"})
      this.belongsToMany(this,{through:friends , as:'firstuser',foreignKey:'seconduser'})
    }
  };
  users.init({
    name: { 
      type:DataTypes.STRING,
      notEmpty: true,
      isAlpha: true
    }
    ,
    email:{
      type:DataTypes.STRING,
      unique: true,
      primaryKey:true,
      isEmail: true,
      notEmpty: true
    },
    birthDate: {type:DataTypes.STRING},
    gender: {type: DataTypes.STRING},
    password:{type : DataTypes.STRING, notEmpty: true}
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};