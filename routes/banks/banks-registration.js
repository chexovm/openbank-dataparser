const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Analyst = require("../../models/analyst.js");

router.get("/registration/bank", (req, res) => {
  res.render("bankregistration");
});

router.post("/registration/bank", async (req, res) => {
  // добавить проверку уже зарегистрированных сотрудников
  await Analyst.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  res.redirect("/login/bank");
});