const ForTenantsInterface = ({
  planId,
  tenantSubscription,
}: {
  planId?: string | null;
  tenantSubscription?: string | null;
}) => {
  console.log("FOR TENANTS PLAN:", planId);
  if (planId) {
    return (
      <main className="flex flex-col justify-between items-center  min-h-screen relative z-10 pt-4">
        <div>
          <h2 className="uppercase">{planId}</h2>
          <span>
            Tenants : planId dynamic Flow (From TenantSubscriptionCard aware of
            the planID chosen)
          </span>
        </div>
      </main>
    );
  }
  if (tenantSubscription) {
    return (
      <main className="flex flex-col justify-between items-center  min-h-screen relative z-10 pt-4">
        <div>
          <h2 className="uppercase">{tenantSubscription}</h2>
          <span>
            Tenants : no planId will use tenantId from tenant register flow that
            is coming , to display tailor made Tenants (How it works) interfaces
            acordingly to their subs only for logged in tenant users
          </span>
        </div>
      </main>
    );
  }
  return (
    <main className="flex flex-col justify-between items-center  min-h-screen relative z-10 pt-4">
      Tenants : From footer , display generic Tenants (How it works) interface
    </main>
  );
};
export default ForTenantsInterface;
