const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Client } = require("../models/client.js");
const { Analyst } = require("../models/analyst.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/login", (req, res) => {
  res.render("bank-login");
});

router.post("/login", (req, res) => {
  const analyst = Analyst.findOne({ username: req.body.username });
  if (analyst.password === req.body.password) {
    res.cookie("openbank", analyst.id);
    res.redirect("/bank/lk/:id");
  } else {
    res.send("Неверное имя пользователя или пароль");
  }
});

router.get("/registration", (req, res) => {
  res.render("bank-registration");
});

router.post("/registration", async (req, res) => {
  // добавить проверку уже зарегистрированных сотрудников
  await Analyst.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  res.redirect("/bank/login");
});

module.exports = router;
