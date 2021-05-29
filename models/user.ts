const { DataTypes } = require("sequelize");
const database = require("../db/connection");

module.exports = database.define("User", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});
