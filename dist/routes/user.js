"use strict";
var Router = require("express").Router;
var router = Router();
var _a = require("../controller/user"), getUsers = _a.getUsers, getUser = _a.getUser, putUser = _a.putUser, postUser = _a.postUser, deleteUser = _a.deleteUser;
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);
module.exports = router;
//# sourceMappingURL=user.js.map