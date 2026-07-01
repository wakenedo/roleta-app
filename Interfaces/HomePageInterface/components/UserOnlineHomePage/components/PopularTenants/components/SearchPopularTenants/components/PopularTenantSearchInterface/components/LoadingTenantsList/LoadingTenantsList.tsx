const LoadingTenantList = () => {
  return (
    <div className="md:h-170 flex items-center justify-center border border-slate-800 bg-slate-900/40">
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />

        <p className="text-slate-400 text-sm tracking-wide">
          Carregando tenants...
        </p>
      </div>
    </div>
  );
};

export default LoadingTenantList;
