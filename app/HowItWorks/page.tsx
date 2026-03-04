"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { HowItWorksInterface } from "@/components/HowItWorksInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const HowItWorks = () => {
  const { user } = useAuth();
  const { tenant } = useTenant();
  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <AreaBackground>
        <HowItWorksInterface />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default HowItWorks;
