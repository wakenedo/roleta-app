import { useRouter } from "next/navigation";

const TenantRegisterInterface = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ForTenants");
  };
  return (
    <button
      onClick={handleClick}
      className="p-1 px-2  rounded-full border border-slate-400 flex items-center gap-2 cursor-pointer disabled:opacity-60"
    >
      Virar Parceiro
    </button>
  );
};
export default TenantRegisterInterface;
