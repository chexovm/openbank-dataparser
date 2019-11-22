const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Analyst } = require("../models/analyst.js");
const { Client } = require("../models/client.js");

mongoose.connect(mongoose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", async function(req, res, next) {
  if (req.cookies["clientsidelk"]) {
    const client = await Client.findOne({ _id: req.cookies["clientsidelk"] });
    res.redirect(`/client/lk/${client.id}`);
  }
  if (req.cookies["banksidelk"]) {
    const analyst = await Analyst.findOne({ _id: req.cookies["banksidelk"] });
    res.redirect(`/bank/lk/${analyst.id}`);
  } else res.render("index");
});

router.get("/logout", async (req, res) => {
  res.clearCookie("clientsidelk");
  res.clearCookie("banksidelk");
  res.redirect("/");
});

module.exports = router;
