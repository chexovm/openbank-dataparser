const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const createClient = require("../seeder/client.js");
const { Client } = require("../models/client.js");
const { Company } = require("../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/lk/:id", async (req, res) => {
  const client = await Client.findById(req.cookies["clientsidelk"]);
  res.render("client-lk", { firstName: client.firstName });
});

router.get("/login", (req, res) => {
  res.render("client-login");
});

router.post("/login", async (req, res) => {
  const client = await Client.findOne({ INN: req.body.INN });
  if (client.password === req.body.password) {
    res.cookie("clientsidelk", client.id);
    res.redirect(`/client/lk/${client.id}`);
  } else {
    res.send("Неверное ИНН или пароль");
  }
});

router.get("/registration", (req, res) => {
  res.render("client-registration");
});

router.post("/registration", (req, res) => {
  // добавить проверку уже зарегистрированных клиентов
  createClient.call(req.body);
  res.redirect("/client/login");
});

module.exports = router;
