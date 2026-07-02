import { TenantProduct } from "@/context/TenantContext/types";

const MetadataProvider = ({ product }: { product: TenantProduct }) => {
  return (
    <div className="flex flex-col cursor-default">
      <span className="text-xs font-semibold">Affiliate :</span>
      <span className={` text-sm `}>
        {product.metadata?.affiliateProvider || product.affiliate}
      </span>

      <span className="text-xs font-semibold">Store :</span>

      <span className={` text-sm }`}>
        {product.metadata?.store || product.store}
      </span>
    </div>
  );
};
export default MetadataProvider;
