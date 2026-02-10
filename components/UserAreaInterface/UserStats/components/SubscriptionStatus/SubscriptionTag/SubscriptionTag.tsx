const SubscriptionTag = ({ subStatus }: { subStatus: string | undefined }) => {
  const styles = {
    free: "bg-slate-200 text-slate-700",
    premium: "bg-amber-400 text-slate-900",
  };
  const status = (subStatus || "free") as keyof typeof styles;
  return (
    <div>
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${styles[status]}`}
      >
        {subStatus?.toUpperCase()}
      </span>
    </div>
  );
};
export default SubscriptionTag;
