import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AnimatedCta } from "./components/AnimatedCta";
import { TheGameExperience } from "./components/TheGameExperience";
import { InfoDynamicSection } from "./components/InfoDynamicSection";
import { UserOfflineHomePageProps } from "../../types";
import { AreaBackground } from "@/backgrounds/AreaBackground";

const UserOfflineHomePage = ({
  onToggleChange,
  handleToggle,
  userMaxedPlan,
  currentUserPlan,
  currentTenantPlan,
  tenantMaxedPlan,
  handleUserSubscribe,
}: UserOfflineHomePageProps) => {
  return (
    <div className="flex flex-col  mt-13  space-y-4 ">
      <AnimatedCta />
      <AreaBackground>
        <TheGameExperience />
        <InfoDynamicSection
          handleToggle={handleToggle}
          onToggleChange={onToggleChange}
        />
        <UserSubscriptionModes
          currentUserPlan={currentUserPlan}
          userMaxedPlan={userMaxedPlan}
          handleUserSubscribe={handleUserSubscribe}
        />
        <TenantSubscriptionModes
          currentTenantPlan={currentTenantPlan}
          tenantMaxedPlan={tenantMaxedPlan}
        />
      </AreaBackground>
    </div>
  );
};
export default UserOfflineHomePage;
