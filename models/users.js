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
    static associate({post,friends}) {
      // define association here
      this.hasMany(post,{foreignKey:"user_id"})
      this.belongsToMany(this,{through:friends,as:'firstuser',foreignKey:'seconduser'})
    }
  };
  users.init({
    user_id: {
      type : DataTypes.INTEGER ,
      unique: true,
      primaryKey:true
    },
    name: { 
      type:DataTypes.STRING,
      notEmpty: true,
      isAlpha: true
    }
    ,
    email:{
      type:DataTypes.STRING,
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