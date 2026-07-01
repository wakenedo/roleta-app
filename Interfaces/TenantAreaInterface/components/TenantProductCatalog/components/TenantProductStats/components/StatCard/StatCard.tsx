import { StatCardProps } from "@/Interfaces/TenantAreaInterface/types";

const StatCard = ({ title, value }: StatCardProps) => (
  <div
    className="cursor-default drop-shadow flex items-center justify-between text-slate-700  px-3 py-1 
  bg-gradient-to-r from-amber-500 to-amber-600"
  >
    <span className="text-xs  text-slate-50 tracking-widest font-bold">
      {title}
    </span>
    <div className="text-center">
      <span className="text-md font-extrabold text-[#00EEFF]  text-shadow-2xs">
        {value}
      </span>
    </div>
  </div>
);
export default StatCard;
