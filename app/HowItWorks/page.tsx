"use client";
import { AreaBackground } from "@/backgrounds/AreaBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useUser } from "@/context/UserContext/UserContext";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { HowItWorksInterface } from "@/Interfaces/HowItWorksInterface";
import { useRouter } from "next/navigation";

const HowItWorks = () => {
  const { data } = useUser();
  const router = useRouter();
  const { tenant } = useTenant();
  const CURRENT_USER_PLAN = data?.user.subscription;
  const userMaxedPlan = data?.user.subscription === "premium+";

  const handleUserSubscribe = (planId: string) => {
    console.log("*How it Works Subscribe to:", planId);
    router.push(`/UserSubscriptions?plan=${encodeURIComponent(planId)}`);
  };
  return (
    <HeaderAndFooterInterface>
      <AreaBackground>
        <HowItWorksInterface
          currentUserPlan={CURRENT_USER_PLAN}
          handleUserSubscribe={handleUserSubscribe}
          userMaxedPlan={userMaxedPlan}
        />
      </AreaBackground>
    </HeaderAndFooterInterface>
  );
};
export default HowItWorks;
