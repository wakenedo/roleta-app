import { TenantAreaInterfaceProps } from "./types";
import { TenantCard } from "./components/TenantCard";
import { TenantProductCatalog } from "./components/TenantProductCatalog";
import { TenantPreview } from "./components/TenantPreview";
import { useRouter } from "next/navigation";
import TenantCardHeader from "./components/TenantCard/components/TenantCardHeader/TenantCardHeader";
import { useState } from "react";
import { HeaderAdvancedSettingsModal } from "./components/TenantCard/components/TenantCardHeader/components/HeaderAdvancedSettingsModal";

const TenantAreaInterface: React.FC<TenantAreaInterfaceProps> = ({
  tenant,
  setTenant,
  loading,
  error,
  products,
  preview,
  logout,
}) => {
  const [activeTab, setActiveTab] = useState<"general" | "catalog" | "preview">(
    "general",
  );
  const router = useRouter();

  const handleLogout = () => {
    setTenant(null);
    logout();
    router.push("/");
  };

  const registeredProductsAmount = products.length;

  const [activeModal, setActiveModal] = useState<
    "advanced" | "bug" | "suggestion" | null
  >(null);

  const closeModal = () => setActiveModal(null);

  return (
    <main className="font-sans overflow-hidden md:max-w-8xl mx-auto relative z-10 min-h-screen flex flex-col items-center  md:px-4 px-1 ">
      {tenant && (
        <div className="w-full h-full   ">
          <TenantCardHeader
            tenant={tenant}
            handleLogout={handleLogout}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setActiveModal={setActiveModal}
          />
          {activeTab === "general" && (
            <TenantCard
              tenant={tenant}
              loading={loading}
              registeredProductsAmount={registeredProductsAmount}
              error={error}
            />
          )}
          {activeTab === "catalog" && (
            <TenantProductCatalog
              error={error}
              loading={loading}
              products={products}
            />
          )}
          {activeTab === "preview" && (
            <TenantPreview preview={preview} loading={loading} error={error} />
          )}
          {activeModal && (
            <HeaderAdvancedSettingsModal
              activeModal={activeModal}
              closeModal={closeModal}
            />
          )}
        </div>
      )}
    </main>
  );
};

export default TenantAreaInterface;
