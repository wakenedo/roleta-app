import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AnimatedCta } from "./components/AnimatedCta";
import { TheGameExperience } from "./components/TheGameExperience";
import { AreaBackground } from "./components/AreaBackground";

const UserOfflineHomePage = () => {
  return (
    <div className="flex flex-col   mt-13  space-y-4 ">
      <AnimatedCta />
      <AreaBackground>
        <TheGameExperience />
        <UserSubscriptionModes />
        <TenantSubscriptionModes />
      </AreaBackground>
    </div>
  );
};
export default UserOfflineHomePage;
