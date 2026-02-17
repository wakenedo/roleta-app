import { FC } from "react";
import { TenantAreaInterfaceProps } from "./types";
import { TenantCard } from "./components/TenantCard";
import { TenantProductCatalog } from "./components/TenantProductCatalog";
import { TenantPreview } from "./components/TenantPreview";

const TenantAreaInterface: FC<TenantAreaInterfaceProps> = ({
  tenant,
  loading,
  error,
  products,
  preview,
}) => {
  console.log("TenantAreaInterface Tenant", tenant);
  console.log("TenantAreaInterface products", products);
  console.log("TenantAreaInterface preview", preview);
  if (!tenant) return null;
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-[-1]" />
      <main className="mt-8 md:max-w-3xl mx-auto relative z-10 min-h-screen flex flex-col items-center pt-6 md:px-4 px-1">
        {tenant && (
          <div className="w-full md:space-y-4 space-y-1 md:grid  mb-6">
            <TenantCard tenant={tenant} loading={loading} error={error} />
            <TenantProductCatalog
              products={products}
              loading={loading}
              error={error}
            />
            <TenantPreview preview={preview} loading={loading} error={error} />
          </div>
        )}
      </main>
    </div>
  );
};

export default TenantAreaInterface;
