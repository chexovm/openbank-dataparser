const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/lk/:id", (req, res) => {
  const client = Client.findById();
  res.render("/client/lk");
});

router.get("/login", (req, res) => {
  res.render("clientlogin");
});

router.post("/login", (req, res) => {
  const client = Client.findOne({ INN: req.body.INN });
  if (client.password === req.body.password) {
    res.cookie("open", client.id);
    res.redirect("/client/lk/:id");
  } else {
    res.send("Неверное ИНН или пароль");
  }
});

router.get("/registration", (req, res) => {
  res.render("clientregistration");
});

router.post("/registration", (req, res) => {
  // добавить проверку уже зарегистрированных клиентов
  createClient.call(req.body);
  res.redirect("/client/login");
});

module.exports = router;
