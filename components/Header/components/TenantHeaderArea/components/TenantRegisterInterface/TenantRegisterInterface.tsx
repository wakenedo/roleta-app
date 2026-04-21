import { useRouter } from "next/navigation";

const TenantRegisterInterface = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ForTenants");
  };
  return (
    <>
      <div className="-mt-2 mb-2">
        <span className="text-[#84e9e4] font-bold tracking-widest uppercase">
          Parceiros
        </span>
      </div>
      <div>
        <div className=" mb-5 mt-4  border hover:text-[#84e9e4] text-slate-400 border-slate-600 cursor-pointer group relative flex flex-col items-center rounded-full bg-gradient-to-br from-[#111827] to-[#1f2937]  transition-all duration-300  hover:-translate-y-1  hover:shadow-[0_0_5px_rgba(132,233,228,0.35)]">
          <button
            onClick={handleClick}
            className=" pt-1 px-2 mb-2  rounded-full text-center  cursor-pointer disabled:opacity-60"
          >
            <span>Ver Mais</span>
          </button>
          <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300  group-hover:opacity-100  bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15  pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};
export default TenantRegisterInterface;
