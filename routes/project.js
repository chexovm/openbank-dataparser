const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Company } = require("../models/company.js");
const createCompany = require("../seeder/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/new", (req, res) => {
  res.render("project-form");
});

router.post("/new", (req, res) => {
  
  res.redirect("");
});

module.exports = router;
