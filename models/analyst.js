const mongoose = require("mongoose");

const analystSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

module.exports = {
  analystSchema,
  Analyst: mongoose.model("Analyst", analystSchema)
};
