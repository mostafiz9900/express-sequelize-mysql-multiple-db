
const Sequelize = require('sequelize');
const sequelize =require('../utils/database');

const Role = sequelize.define('role',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        field:'username'
    }
     },{   
   
    // createdAt:Sequelize.DATE,
    // updatedAt:Sequelize.DATE,
        freezeTableName: true,
        createdAt:false,
        updatedAt:false,
        tableName:'role'

        // id:false
    });
module.exports = Role;