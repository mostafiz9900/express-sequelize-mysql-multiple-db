
const Sequelize = require('sequelize');


const sequelize2 =require('../utils/database2');


const Student = sequelize2.define('student',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{type:Sequelize.STRING,field:'name'},
    email:{type:Sequelize.STRING,},
    age:{type:Sequelize.INTEGER,},
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
});
module.exports = Student;