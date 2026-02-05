const AccountRewardHistory = () => {
  return (
    <>
      <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4 w-full">
        <span className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2">
          Prêmios Acumulados
        </span>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="text-sm text-slate-500">
          <div className="w-fit flex flex-col">
            <div>
              <span className="text-xs font-semibold text-slate-600">
                Economizado
              </span>
              <div>
                <span className="text-xs text-slate-600">R$ 0,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountRewardHistory;
