const SubscriptionTag = ({ subStatus }: { subStatus: string | undefined }) => {
  const styles = {
    free: "bg-slate-200 text-slate-700",
    premium: "bg-amber-400 text-slate-900",
  };
  const status = (subStatus || "free") as keyof typeof styles;
  return (
    <div className="drop-shadow mb-1">
      <span
        className={`text-xs font-bold px-3 py-1 rounded-full tracking-widest ${styles[status]}`}
      >
        {subStatus?.toUpperCase()}
      </span>
    </div>
  );
};
export default SubscriptionTag;
