const PlanIdInterface = ({ planId }: { planId: string }) => {
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
};
export default PlanIdInterface;
