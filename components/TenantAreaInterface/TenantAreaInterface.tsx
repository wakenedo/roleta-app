import { FC } from "react";
import { TenantAreaInterfaceProps } from "./types";
import { TenantCard } from "./components/TenantCard";

const TenantAreaInterface: FC<TenantAreaInterfaceProps> = ({
  tenant,
  loading,
  error,
}) => {
  if (!tenant) return null;
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-[-1]" />
      <main className="mt-8 md:max-w-3xl mx-auto relative z-10 min-h-screen flex flex-col items-center pt-6 md:px-4 px-1">
        {loading && <p>Loading tenant...</p>}
        {error && <p>{error}</p>}

        {tenant && (
          <div className="w-full md:space-y-4 space-y-1 md:grid  mb-6">
            <TenantCard tenant={tenant} />
          </div>
        )}
      </main>
    </div>
  );
};

export default TenantAreaInterface;
