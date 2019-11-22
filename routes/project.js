const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Company } = require("../models/company.js");
const { Client } = require("../models/client.js");
const createCompany = require("../seeder/company.js");

mongoose.connect(mongoose_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get("/new", (req, res) => {
  res.render("project-form");
});

router.post("/new", async (req, res) => {
  const projectId = await createCompany.call(req.body);
  const client = await Client.findById(req.cookies["clientsidelk"]);
  client.projects.push(projectId);
  await client.save();
  res.redirect(`/project/${projectId}`);
});

router.get("/:id", async (req, res) => {
  const project = await Company.findById(req.params.id);
  res.render("project", { project });
});

module.exports = router;
