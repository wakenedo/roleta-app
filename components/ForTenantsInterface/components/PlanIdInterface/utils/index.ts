const selectedPlanMaxProducts = (selectedPlan: {
  id: string;
  name: string;
  price: string;
}) => {
  switch (selectedPlan.id) {
    case "tenant":
      return 100;
    case "tenantPro":
      return 200;
    case "tenantPremium":
      return 500;
    default:
      return 50;
  }
};

export { selectedPlanMaxProducts };
