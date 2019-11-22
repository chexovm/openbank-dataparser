const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../../models/company.js");

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", (req, res) => {
  const client = Client.findById();
  res.render("lk");
});

module.exports = router;
