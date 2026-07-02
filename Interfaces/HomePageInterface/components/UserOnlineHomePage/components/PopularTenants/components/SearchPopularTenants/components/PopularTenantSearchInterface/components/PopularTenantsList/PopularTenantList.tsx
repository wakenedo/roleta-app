import { Tenant } from "@/context/TenantContext/types";
import { SetStateAction } from "react";

const PopularTenantList = ({
  filtered,
  setSelected,
}: {
  filtered: Tenant[];
  setSelected: (value: SetStateAction<Tenant | null>) => void;
}) => {
  return (
    <div
      className=" 
          text-left space-y-4 max-h-170 overflow-scroll [&::-webkit-scrollbar]:hidden scroll-smooth"
    >
      {filtered.map((tenant) => (
        <div
          key={tenant.id}
          className={`
          p-2 py-8 font-bold text-slate-200 cursor-pointer
          hover:from-[#6f798e]
          bg-gradient-to-br from-[#111827] to-[#1f2937]
          text-left shadow-lg
          `}
          onClick={() => setSelected(tenant)}
        >
          <div className="ml-4 text-lg">{tenant.name}</div>
        </div>
      ))}
    </div>
  );
};
export default PopularTenantList;
