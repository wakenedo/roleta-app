export type TenantSubscription = "tenant" | "tenantPro" | "tenantPremium";
const SUBSCRIPTION_STYLES: Record<
  TenantSubscription,
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
type Props = {
  subscription?: TenantSubscription;
};
const SubscriptionBadge = ({ subscription = "tenant" }: Props) => {
  const config =
    SUBSCRIPTION_STYLES[subscription] ?? SUBSCRIPTION_STYLES.tenant;

  return (
    <div className="my-4">
      <span
        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${config.className}`}
      >
        {config.label}
      </span>
    </div>
  );
};
export default SubscriptionBadge;
