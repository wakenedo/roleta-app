import { TenantProduct } from "@/context/TenantContext/types";
import { CheckoutProductGrid } from "./components/CheckoutProductGrid";
import { CheckoutProductJsonViewer } from "./components/CheckoutProductJsonViewer";

const TenantProductsCatalogInterface = ({
  products,
  loading,
  error,
}: {
  products: TenantProduct[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <>
      <span className="text-sm  text-slate-50">Produtos carregados</span>
      <div className="border  shadow-md md:p-4 p-2 ">
        <div className="flex flex-col gap-3 ">
          <div>
            {error && error}
            {loading && <span>Loading products...</span>}
            {!loading && !error && (
              <>
                <CheckoutProductGrid products={products} />
                <CheckoutProductJsonViewer products={products} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TenantProductsCatalogInterface;
