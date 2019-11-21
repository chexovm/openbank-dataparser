const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const createClient = require("../seeder/client.js");
const Analyst = require("../models/analyst.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", async function(req, res, next) {
  if (req.cookies["open"]) {
    const client = await Client.findOne({ _id: req.cookies["open"] });
    res.redirect("lk/:${client.id}");
  }
  if (req.cookies["openbank"]) {
    const analyst = await Analyst.findOne({ _id: req.cookies["openbank"] });
    res.redirect("lk/:${analyst.id}");
  } else res.render("index", { text: "Hello World!" });
});

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/registration", (req, res) => {
  // добавить проверку уже зарегистрированных клиентов
  createClient.call(req.body);
  res.redirect("/login");
});

router.get("/bankregistration", (req, res) => {
  res.render("bankregistration");
});

router.post("/bankregistration", async (req, res) => {
  // добавить проверку уже зарегистрированных сотрудников
  await Analyst.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  res.redirect("/banklogin");
});

module.exports = router;
