import { TenantProduct } from "@/context/TenantContext/types";
import { TenantError } from "../TenantError";
import { ProductGrid } from "./components/ProductGrid";
import { ProductJsonViewer } from "./components/ProductJsonViewer";
import { ProductEditSection } from "./components/ProductEditSection";

const TenantProductCatalog = ({
  products,
  loading,
  error,
}: {
  products: TenantProduct[];
  loading: boolean;
  error: string | null;
}) => {
  if (!products) return error;
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-2 w-full h-fit ">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3 py-3 ">
        {error && <TenantError error={error} />}
        {loading && <span>Loading tenant...</span>}
        {!loading && !error && (
          <div className="flex flex-col">
            <div className=" flex space-x-2  ">
              <div className=" flex flex-col w-1/2">
                <ProductGrid products={products} />
                <ProductJsonViewer products={products} />
              </div>
              <ProductEditSection />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TenantProductCatalog;
