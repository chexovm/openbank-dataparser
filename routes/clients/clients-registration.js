const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const createClient = require("../../seeder/client.js");

mongoose.connect(mongoose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/registration", (req, res) => {
  res.render("registration");
});

router.post("/registration", (req, res) => {
  // добавить проверку уже зарегистрированных клиентов
  createClient.call(req.body);
  res.redirect("/login");
});
