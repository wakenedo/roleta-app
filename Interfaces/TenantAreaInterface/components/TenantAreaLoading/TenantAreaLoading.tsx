const TenantAreaLoading = () => {
  return (
    <>
      <div className="xl:h-177.25 flex-col flex justify-center items-center ">
        <div>
          <div className="h-20 w-20 my-6 animate-spin rounded-full border-2 border-slate-200 border-t-cyan-500" />
        </div>
        <div>
          <p className="tracking-widest text-xs text-slate-500">
            Aguarde um momento enquanto carregamos seus dados...
          </p>
        </div>
      </div>
    </>
  );
};
export default TenantAreaLoading;
