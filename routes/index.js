const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Analyst } = require("../models/analyst.js");
const { Client } = require("../models/client.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", async function(req, res, next) {
  if (req.cookies["open"]) {
    const client = await Client.findOne({ _id: req.cookies["open"] });
    res.redirect("/client/lk/:id");
  }
  if (req.cookies["openbank"]) {
    const analyst = await Analyst.findOne({ _id: req.cookies["openbank"] });
    res.redirect("/bank/lk/:id");
  } else res.render("index", { text: "Openbank!" });
});

module.exports = router;
