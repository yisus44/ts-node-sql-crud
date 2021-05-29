const express = require("express");
const cors = require("cors");
const userRouter = require("../routes/user");
const db = require("../db/connection");

module.exports = class Server {
  private app;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.middlewares();
    this.dbConnection();
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Body lecture
    this.app.use(express.json());
    //public
    this.app.use(express.static("public"));
  }

  async dbConnection() {
    try {
      await db.authenticate();
    } catch (err) {
      throw new Error(err);
    }
  }

  routes() {
    this.app.use(this.apiPaths.users, userRouter);
  }

  listen() {
    this.app.listen(this.port, function () {
      console.log("Server up and running");
    });
  }
};
