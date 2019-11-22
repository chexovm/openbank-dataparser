const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../../models/company.js");

mongoose.connect(mongoose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/bank", (req, res) => {
  res.render("banklogin");
});

router.post("/bank", (req, res) => {
  const analyst = Analyst.findOne({ username: req.body.username });
  if (analyst.password === req.body.password) {
    res.cookie("openbank", analyst.id);
    res.redirect("/banklk");
  } else {
    res.send("Неверное имя пользователя или пароль");
  }
});
