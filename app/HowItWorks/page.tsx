"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { HowItWorksInterface } from "@/components/HowItWorksInterface";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useUser } from "@/context/UserContext/UserContext";
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
    <>
      <Header />
      <AreaBackground>
        <HowItWorksInterface
          currentUserPlan={CURRENT_USER_PLAN}
          handleUserSubscribe={handleUserSubscribe}
          userMaxedPlan={userMaxedPlan}
        />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default HowItWorks;
