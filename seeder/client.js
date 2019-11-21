const mongoose = require("mongoose");
const Client = require("../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Создание клиента в БД
async function createClient() {
  Client.create({
    firstName: this.firstName,
    lastName: this.lastName,
    position: this.position,
    email: this.email,
    phoneNumber: this.phoneNumber,
    INN: this.INN,
    companyName: this.companyName,
    OGRN: this.OGRN,
    password: this.password
  });
}

module.exports = createClient;
