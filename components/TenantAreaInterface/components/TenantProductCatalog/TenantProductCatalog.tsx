import { TenantProduct } from "@/context/TenantContext/types";
import { TenantError } from "../TenantError";
import { ProductGrid } from "./components/ProductGrid";
import { ProductJsonViewer } from "./components/ProductJsonViewer";
import { TenantAreaSectionBackground } from "../TenantAreaSectionBackground";

const TenantProductCatalog = ({
  products,
  loading,
  error,
}: {
  products: TenantProduct[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2 ">
      <div className="flex flex-col gap-3 ">
        <div>
          <span className="text-sm font-semibold text-slate-800">
            Catalogo de Produtos
          </span>
          <hr className="border-t border-slate-300 my-2" />
          {error && <TenantError error={error} />}
          {loading && <span>Loading tenant...</span>}
          {!loading && !error && (
            <TenantAreaSectionBackground>
              <ProductGrid products={products} />
              <ProductJsonViewer products={products} />
            </TenantAreaSectionBackground>
          )}
        </div>
      </div>
    </div>
  );
};
export default TenantProductCatalog;
