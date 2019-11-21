const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  position: String,
  email: String,
  phoneNumber: Number,
  INN: Number,
  companyName: String,
  OGRN: Number,
  password: String,
  projects: Array
});

module.exports = {
  clientSchema,
  Client: mongoose.model("Client", clientSchema)
};
