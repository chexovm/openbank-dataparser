const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", (req, res) => {
  const client = Client.findById();
  res.render("lk");
});

module.exports = router;
