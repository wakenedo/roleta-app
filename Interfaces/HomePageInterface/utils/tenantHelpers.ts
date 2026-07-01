const TENANT_PLANS = {
  tenant: {
    tenantScopedQuota: 10,
    productLimit: 100,
    monthlySpinsLimit: 200000,
  },
  tenantPro: {
    tenantScopedQuota: 20,
    productLimit: 250,
    monthlySpinsLimit: 500000,
  },
  tenantPremium: {
    tenantScopedQuota: 30,
    productLimit: 500,
    monthlySpinsLimit: 850000,
  },
};

const tenantPlans = [
  {
    id: "tenant",
    name: "TENANT",
    price: "R$299,",
  },
  {
    id: "tenantPro",
    name: "TENANT PRO",
    price: "R$499,",
  },
  {
    id: "tenantPremium",
    name: "TENANT PREMIUM",
    price: "R$799,",
    highlight: true,
  },
];

export { TENANT_PLANS, tenantPlans };
