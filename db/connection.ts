const { Sequelize } = require("sequelize");

module.exports = new Sequelize("test", "ye", "yeyeye", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
});
