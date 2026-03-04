"use client";
import { Footer } from "@/components/Footer";
import { ForTenantsInterface } from "@/components/ForTenantsInterface";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useSearchParams } from "next/navigation";

const ForTenants = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  return (
    <>
      <Header />
      <AreaBackground>
        <ForTenantsInterface planId={planId} />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default ForTenants;
