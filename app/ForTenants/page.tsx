import { Footer } from "@/components/Footer";
import { ForTenantsContent } from "@/components/ForTenantsInterface/components/ForTenantsContent";

import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { Suspense } from "react";

const ForTenants = () => {
  return (
    <>
      <Header />
      <AreaBackground>
        <Suspense fallback={null}>
          <ForTenantsContent />
        </Suspense>
      </AreaBackground>
      <Footer />
    </>
  );
};
export default ForTenants;
