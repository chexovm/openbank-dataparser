const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: String,
  projectName: String,
  industry: String,
  projectDuration: String,
  yearOfFoundation: Number,
  investments: Number,
  netDebt: Number,
  description: String,
  IRR: Number,
  NPV: Number,
  IRRTV: Number,
  NPVTV: Number,
  DPBP: Number,
  TV: Number,
  market: Array,
  sector1: Array,
  sector2: Array,
  sector3: Array,
  sector4: Array,
  competitor1: String,
  competitor2: String,
  competitor3: String,
  competitor4: String,
  competitor5: String,
  trend1: String,
  trend2: String,
  trend3: String,
  trend4: String,
  trend5: String,
  revenue: Array,
  revenue1: Array,
  revenue2: Array,
  revenue3: Array,
  revenue4: Array,
  revenue5: Array,
  costPrice: Array,
  cost1: Array,
  cost2: Array,
  cost3: Array,
  cost4: Array,
  KiAUR: Array,
  EBITDA: Array,
  profitabilityEBITDA: Array,
  depreciation: Array,
  EBIT: Array,
  interest: Array,
  incomeTax: Array,
  netProfit: Array,
  capitalExpenditures: Array,
  projectInvestments: Array,
  projectNetDebt: Array,
  cashFlow: Array,
  FCFF: Array,
  index1: Number,
  index2: Number,
  index3: Number,
  index4: Number
});

module.exports = {
  companySchema,
  Company: mongoose.model("Company", companySchema)
};
