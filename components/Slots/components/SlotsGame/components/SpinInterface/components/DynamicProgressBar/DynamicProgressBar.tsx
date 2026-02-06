const DynamicProgressBar = ({
  barColor,
  progress,
}: {
  barColor: "bg-green-400" | "bg-yellow-400" | "bg-red-400";
  progress: number;
}) => {
  return (
    <div className="py-1">
      <div className="my-1 mx-10 h-2 bg-slate-200 rounded overflow-hidden shadow-lg">
        <div
          className={`h-2 ${barColor} rounded transition-all `}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
export default DynamicProgressBar;
