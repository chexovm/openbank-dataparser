const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  const client = Client.findOne({ INN: req.body.INN });
  if (client.password === req.body.password) {
    res.cookie("open", client.id);
    res.redirect("lk");
  } else {
    res.send("Неверное ИНН или пароль");
  }
});

router.get("/banklogin", (req, res) => {
  res.render("banklogin");
});

router.post("/banklogin", (req, res) => {
  const analyst = Analyst.findOne({ username: req.body.username });
  if (analyst.password === req.body.password) {
    res.cookie("openbank", analyst.id);
    res.redirect("banklk");
  } else {
    res.send("Неверное имя пользователя или пароль");
  }
});

module.exports = router;
