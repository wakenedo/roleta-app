const AvailableRounds = ({
  isEmpty,
  remaining,
  dailyLimit,
}: {
  isEmpty: boolean;
  remaining: number;
  dailyLimit: number;
}) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <>
        <span
          className={`text-base font-semibold ${
            isEmpty ? "text-red-600" : "text-slate-800"
          } mb-2 line-clamp-1`}
        >
          Rodadas de hoje:
        </span>
      </>
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-lg font-bold ${
            isEmpty ? "text-red-600" : "text-slate-800"
          }`}
        >
          {remaining} / {dailyLimit}
        </span>
      </div>
    </div>
  );
};
export default AvailableRounds;
