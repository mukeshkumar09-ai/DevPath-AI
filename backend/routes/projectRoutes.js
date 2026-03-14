const express = require("express");
const router = express.Router();

router.post("/create-project", (req, res) => {
  const projectIdea = req.body.idea;

  res.json({
    message: "Project received",
    idea: projectIdea
  });
});

module.exports = router;