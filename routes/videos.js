const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You hit the vedios GET endpoint!");
});

router.post("/", (req, res) => {
  res.send("You hit the video POST end point!");
});

module.exports = router;
