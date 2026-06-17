import { DistributionCardProps } from "@/components/TenantAreaInterface/types";

const DistributionCard = ({ title, data }: DistributionCardProps) => {
  const max = Math.max(...data.map((item) => item.count));

  return (
    <div className="cursor-default text-slate-700 drop-shadow  px-3 bg-white">
      <span className="font-extrabold pb-3 text-xs tracking-widest">
        {title}
      </span>

      <div className="space-y-1 pb-1">
        {data.map((item) => (
          <div key={item.name} className="mb-1">
            <div className="flex justify-between text-sm">
              <span className="capitalize tracking-widest">{item.name}</span>
              <span>{item.count}</span>
            </div>

            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-500 rounded"
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
