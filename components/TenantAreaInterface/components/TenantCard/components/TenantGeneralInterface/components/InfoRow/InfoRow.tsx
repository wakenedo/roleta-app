const InfoRow = ({
  label,
  value,
  small,
}: {
  label: string;
  value: React.ReactNode;
  small?: boolean;
}) => (
  <div className="flex justify-between items-center text-base">
    <span className={`${small ? "text-sm" : "text-lg"} text-slate-400`}>
      {label}
    </span>
    <span
      className={`${small ? "text-sm" : "text-lg"} text-slate-500 text-right`}
    >
      {value}
    </span>
  </div>
);
export default InfoRow;
