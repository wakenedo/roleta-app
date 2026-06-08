import { TenantShareExperienceLink } from "../../../TenantShareExperienceLink";
import { HeaderGreetingSection } from "./components/HeaderGreetingSection";
import { HeaderSectionTab } from "./components/HeaderSectionTab";
import { TenantCardHeaderProps } from "@/components/TenantAreaInterface/types";

const TenantCardHeader = ({
  tenant,
  handleLogout,
  setActiveTab,
  activeTab,
  setActiveModal,
}: TenantCardHeaderProps) => {
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
