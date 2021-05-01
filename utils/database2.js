const Sequelize = require('sequelize');

 const sequelize2 = new Sequelize('demo2_db', 'root', 'root', {
    host: "127.0.0.1",
    port: '3306',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: true
    }
  });
  sequelize2
  .authenticate()
  .then(() => {
   console.log('Connected to the database. demo2_db');
  })
  .catch((error) => {
    console.log('Could not connect to the database.', error);
  });
  module.exports =sequelize2;