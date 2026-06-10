const DUserActionsLimits = ({
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
    <div className="pt-4 pb-1  flex flex-col items-center justify-center space-y-2  rounded-bl-lg  bg-gray-100 backdrop-blur drop-shadow-lg">
      <div className="flex space-x-4">
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
      <div className="px-2 border h-20 border-slate-400 mx-1 rounded-bl-lg">
        <span className="text-xs ">
          Later will add cooldowns for limits & CTA to extend quotas
        </span>
      </div>
    </div>
  );
};
export default DUserActionsLimits;
