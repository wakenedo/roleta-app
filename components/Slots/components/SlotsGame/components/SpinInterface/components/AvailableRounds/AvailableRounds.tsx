const AvailableRounds = ({
  isEmpty,
  remaining,
  dailyLimit,
  resetsAt,
}: {
  isEmpty: boolean;
  remaining: number;
  dailyLimit: number;
  resetsAt: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-1 ">
      <div className="flex justify-center items-center gap-1">
        <div>
          <span
            className={`text-base font-semibold  ${
              isEmpty ? "text-red-600" : "text-slate-800"
            } mb-2 `}
          >
            Rodadas de hoje:
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`text-lg font-bold align-text-bottom ${
              isEmpty ? "text-red-600" : "text-slate-800"
            }`}
          >
            {remaining} / {dailyLimit}
          </span>
        </div>
      </div>
      <div>
        {isEmpty && (
          <span className="text-xs align-text-top">
            Seus Giros voltam em : {resetsAt}
          </span>
        )}
      </div>
    </div>
  );
};
export default AvailableRounds;
