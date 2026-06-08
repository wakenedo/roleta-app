import { Tenant } from "@/context/TenantContext/types";
import { Dispatch, SetStateAction } from "react";
import { TenantShareExperienceLink } from "../../../TenantShareExperienceLink";
import { HeaderGreetingSection } from "./components/HeaderGreetingSection";
import { HeaderSectionTab } from "./components/HeaderSectionTab";

const TenantCardHeader = ({
  tenant,
  handleLogout,
  setActiveTab,
  activeTab,
  setActiveModal,
}: {
  tenant: Tenant;
  handleLogout: () => void;
  activeTab: "preview" | "general" | "catalog";
  setActiveTab: Dispatch<SetStateAction<"preview" | "general" | "catalog">>;
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
}) => {
  const tenantName = tenant.name;
  return (
    <div className=" bg-white/90 backdrop-blur rounded-tr-2xl ">
      <HeaderGreetingSection
        tenantName={tenantName}
        handleLogout={handleLogout}
        setActiveModal={setActiveModal}
      />
      <div className="relative flex justify-end px-1">
        <TenantShareExperienceLink
          tenantIdentifier={tenant.id}
          absolutePosition={true}
        />
      </div>
      <hr className="border-t border-slate-300 mt-14 mb-2  ml-3 mr-[325px] " />

      <HeaderSectionTab setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  );
};
export default TenantCardHeader;
