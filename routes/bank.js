const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Analyst } = require("../models/analyst.js");

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/login", (req, res) => {
  res.render("bank-login");
});

router.post("/login", async (req, res) => {
  const analyst = await Analyst.findOne({ username: req.body.username });
  if (analyst === null) {
    res.send("Такого пользовтеля не существует");
  } else if (analyst.password === req.body.password) {
    res.cookie("banksidelk", analyst.id);
    res.redirect(`/bank/lk/${analyst.id}`);
  } else {
    res.send("Неверное имя пользователя или пароль");
  }
});

router.get("/registration", (req, res) => {
  res.render("bank-registration");
});

router.post("/registration", async (req, res) => {
  // добавить проверку уже зарегистрированных сотрудников

  let analyst = new Analyst({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  await analyst.save();
  res.redirect("/bank/login");
});

router.get("/lk/:id", async (req, res) => {
  const analyst = await Analyst.findById(req.cookies["banksidelk"]);
  res.render("bank-lk", { firstName: analyst.firstName });
});

module.exports = router;
