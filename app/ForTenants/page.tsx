"use client";
import { Footer } from "@/components/Footer";
import { ForTenantsInterface } from "@/components/ForTenantsInterface";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useSearchParams } from "next/navigation";

const ForTenants = () => {
  const { user } = useAuth();
  const { tenant } = useTenant();
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  return (
    <>
      <Header user={user} tenantId={tenant?.id} />
      <AreaBackground>
        <ForTenantsInterface
          planId={planId}
          tenantSubscription={tenant?.subscription}
        />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default ForTenants;
