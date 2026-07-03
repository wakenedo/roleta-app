import { TenantModesProps } from "../types";

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

const SUBSCRIPTION_STYLES: Record<
  TenantModesProps,
  { label: string; className: string }
> = {
  tenant: {
    label: "Tenant",
    className: "bg-gray-700 text-gray-200 border border-gray-500",
  },
  tenantPro: {
    label: "Pro",
    className: "bg-blue-600/20 text-blue-400 border border-blue-500",
  },
  tenantPremium: {
    label: "Premium",
    className: "bg-amber-500/20 text-amber-400 border border-amber-500",
  },
};

export { TENANT_PLANS, tenantPlans, SUBSCRIPTION_STYLES };
