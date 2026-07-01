import { DistributionCardProps } from "@/Interfaces/TenantAreaInterface/types";

const DistributionCard = ({ title, data }: DistributionCardProps) => {
  const max = Math.max(...data.map((item) => item.count));

  return (
    <div
      className="cursor-default text-slate-700 drop-shadow px-3 
      bg-gradient-to-r from-amber-500 to-amber-600"
    >
      <span className="font-extrabold pb-3 text-xs tracking-widest text-slate-100">
        {title}
      </span>

      <div className="space-y-1 pb-1">
        {data.map((item) => (
          <div key={item.name} className="mb-1">
            <div className="flex justify-between text-sm">
              <span className="capitalize tracking-widest text-[#00EEFF]">
                {item.name}
              </span>
              <span className="text-[#00EEFF] font-bold text-shadow-2xs">
                {item.count}
              </span>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-[#00EEFF] rounded"
                style={{
                  width: `${(item.count / max) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DistributionCard;
