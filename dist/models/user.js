"use strict";
var DataTypes = require("sequelize").DataTypes;
var database = require("../db/connection");
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
//# sourceMappingURL=user.js.map