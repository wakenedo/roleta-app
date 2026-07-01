const USER_SPIN_PLANS = {
  free: {
    global: 10,
    tenantMultiplier: 0,
    monthlyGlobalTenantsQuota: 100,
    weeklyGlobalTenantsQuota: 25,
  },
  premium: {
    global: 20,
    tenantMultiplier: 0.5,
    monthlyGlobalTenantsQuota: 200,
    weeklyGlobalTenantsQuota: 50,
  },
  "premium+": {
    global: 30,
    tenantMultiplier: 1,
    monthlyGlobalTenantsQuota: 400,
    weeklyGlobalTenantsQuota: 100,
  },
};

const userPlans = [
  {
    id: "premium",
    name: "PREMIUM",
    price: "R$39,",
    highlight: false,
  },
  {
    id: "premium+",
    name: "PREMIUM+",
    price: "R$59,",
    highlight: true,
  },
];

export { USER_SPIN_PLANS, userPlans };
