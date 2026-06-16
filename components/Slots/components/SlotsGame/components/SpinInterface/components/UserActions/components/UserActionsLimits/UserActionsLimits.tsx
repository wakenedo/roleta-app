const UserActionsLimits = ({
  userMonthlyLimit,
  userWeeklyLimit,
}: {
  userMonthlyLimit:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  userWeeklyLimit:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
}) => {
  return (
    <div className="py-4 px-4 flex items-center justify-center  rounded-bl-lg space-x-4 bg-white/50 backdrop-blur shadow-md">
      <div className="flex flex-col text-xs space-y-1 tracking-widest items-center">
        <div className="bg-slate-600  ">
          <span className="text-slate-50 px-2 font-bold">Semanal</span>
        </div>
        <span className="font-bold text-slate-600">
          {userWeeklyLimit?.remaining} / {userWeeklyLimit?.limit}
        </span>
      </div>

      <div className="flex flex-col text-xs space-y-1 tracking-widest items-center">
        <div className="bg-slate-600  ">
          <span className="text-slate-50 px-2 font-bold">Mensal</span>
        </div>
        <span className="font-bold text-slate-600">
          {userMonthlyLimit?.remaining} / {userMonthlyLimit?.limit}
        </span>
      </div>
    </div>
  );
};
export default UserActionsLimits;
