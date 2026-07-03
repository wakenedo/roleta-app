import { TenantModesProps } from "@/Interfaces/HomePageInterface/types";
import { SUBSCRIPTION_STYLES } from "@/Interfaces/HomePageInterface/utils/tenantHelpers";

type Props = {
  subscription?: TenantModesProps;
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
