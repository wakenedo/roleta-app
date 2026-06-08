type TenantStatus =
  | "active"
  | "inactive"
  | "pending"
  | "canceled"
  | "suspended";

const StatusBadge = ({ status }: { status: TenantStatus }) => {
  const statusStyles: Record<TenantStatus, string> = {
    active: "bg-green-100 text-green-800 border-green-300",
    inactive: "bg-slate-100 text-slate-700 border-slate-300",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
    canceled: "bg-red-100 text-red-800 border-red-300",
    suspended: "bg-orange-100 text-orange-800 border-orange-300",
  };

  return (
    <span
      className={`tracking-widest inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};
export default StatusBadge;
