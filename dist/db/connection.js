"use strict";
var Sequelize = require("sequelize").Sequelize;
module.exports = new Sequelize("test", "ye", "yeyeye", {
    host: "localhost",
    dialect: "mariadb",
    logging: false,
});
//# sourceMappingURL=connection.js.map