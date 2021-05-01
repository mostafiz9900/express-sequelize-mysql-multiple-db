const Sequelize = require('sequelize');

 const sequelize = new Sequelize('demo_web_db', 'root', 'root', {
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
  sequelize
  .authenticate()
  .then(() => {
   console.log('Connected to the database. demo_web_db');
  })
  .catch((error) => {
    console.log('Could not connect to the database.', error);
  });

  module.exports = sequelize;