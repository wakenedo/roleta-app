import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AnimatedCta } from "./components/AnimatedCta";
import { TheGameExperience } from "./components/TheGameExperience";
import { AreaBackground } from "./components/AreaBackground";
import { InfoDynamicSection } from "./components/InfoDynamicSection";

const UserOfflineHomePage = ({
  onToggleChange,
  handleToggle,
  userMaxedPlan,
  currentUserPlan,
  currentTenantPlan,
  tenantMaxedPlan,
  handleUserSubscribe,
}: {
  onToggleChange: "left" | "right";
  handleToggle: (side: "left" | "right") => void;
  userMaxedPlan: boolean;
  tenantMaxedPlan: boolean;
  currentUserPlan: string | undefined;
  currentTenantPlan: string | undefined;
  handleUserSubscribe: (planId: string) => void;
}) => {
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
