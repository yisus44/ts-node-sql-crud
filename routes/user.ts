const { Router } = require("express");
const router = Router();
const {
  getUsers,
  getUser,
  putUser,
  postUser,
  deleteUser,
} = require("../controller/user");

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

module.exports = router;
