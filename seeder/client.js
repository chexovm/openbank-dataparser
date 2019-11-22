const mongoose = require("mongoose");
const { Client } = require("../models/client.js");

mongoose.connect(process.env.MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Создание клиента в БД
async function createClient() {
  const client = new Client({
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
  await client.save();
}

module.exports = createClient;
