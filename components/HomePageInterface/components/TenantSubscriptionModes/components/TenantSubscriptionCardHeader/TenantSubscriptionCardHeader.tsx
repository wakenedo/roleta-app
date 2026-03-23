import { TenantPlansProps } from "@/components/HomePageInterface/types";

const TenantSubscriptionCardHeader = ({ plan }: TenantPlansProps) => {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-wide mb-4 text-amber-500 cursor-default">
        {plan.name}
      </h3>

      <div className="flex space-x-1 items-center cursor-default  mb-6 bg-gradient-to-r from-[#84e9e4] to-amber-500 hover:opacity-90 bg-clip-text text-transparent">
        <div className="text-4xl font-extrabold">{plan.price}</div>
        <div className="text-xl font-bold mt-4">99</div>
      </div>
    </>
  );
};
export default TenantSubscriptionCardHeader;
