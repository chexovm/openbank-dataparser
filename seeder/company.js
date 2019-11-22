const mongoose = require("mongoose");
const { Company } = require("../models/company.js");

mongoose.connect("mongodb://localhost:27017/openbank", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Создание компании в БД
async function createCompany() {
  await Company.create({
    companyName: this.companyName,
    projectName: this.projectName,
    industry: this.industry,
    projectDuration: this.projectDuration,
    yearOfFoundation: this.yearOfFoundation,
    investments: this.investments,
    netDebt: this.netDebt,
    description: this.description,
    IRR: this.IRR,
    NPV: this.NPV,
    IRRTV: this.IRRTV,
    NPVTV: this.NPVTV,
    DPBP: this.DPBP,
    TV: this.TV,
    market: this.market,
    sector1: this.sector1,
    sector2: this.sector2,
    sector3: this.sector3,
    sector4: this.sector4,
    competitor1: this.competitor1,
    competitor2: this.competitor2,
    competitor3: this.competitor3,
    competitor4: this.competitor4,
    competitor5: this.competitor5,
    trend1: this.trend1,
    trend2: this.trend2,
    trend3: this.trend3,
    trend4: this.trend4,
    trend5: this.trend5,
    revenue: this.revenue,
    revenue1: this.revenue1,
    revenue2: this.revenue2,
    revenue3: this.revenue3,
    revenue4: this.revenue4,
    revenue5: this.revenue5,
    costPrice: this.costPrice,
    cost1: this.cost1,
    cost2: this.cost2,
    cost3: this.cost3,
    cost4: this.cost4,
    KiAUR: this.KiAUR,
    EBTDA: this.EBTDA,
    profitabilityEBTDA: this.profitabilityEBTDA,
    depreciation: this.depreciation,
    EBT: this.EBT,
    interest: this.interest,
    incomeTax: this.incomeTax,
    netProfit: this.netProfit,
    capitalExpenditures: this.capitalExpenditures,
    projectInvestments: this.projectInvestments,
    projectNetDebt: this.projectNetDebt,
    cashFlow: this.cashFlow,
    FCFF: this.FCFF,
    index1: this.index1,
    index2: this.index2,
    index3: this.index3,
    index4: this.index4
  });
}

module.exports = createCompany;
