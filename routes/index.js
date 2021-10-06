const express = require("express");
const router = express.Router();
const usersRouter = require("./user");

router.use("/user", usersRouter);

router.get("/", (req, res) => {
  res.send("dfsdf");
  res.status(404).send("Sorry not found!");
});

module.exports = router;
