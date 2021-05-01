
const Sequelize = require('sequelize');
const sequelize =require('../utils/database');

const User = sequelize.define('user',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{type:Sequelize.STRING,field:'username'},
    email:{type:Sequelize.STRING,},
    password:{type:Sequelize.STRING,},
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
});
module.exports = User;