const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../../models/company.js");

mongoose.connect(mongoose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  const client = Client.findOne({ INN: req.body.INN });
  if (client.password === req.body.password) {
    res.cookie("open", client.id);
    res.redirect("lk");
  } else {
    res.send("Неверное ИНН или пароль");
  }
});

module.exports = router;
