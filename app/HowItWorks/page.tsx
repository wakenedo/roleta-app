import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { HowItWorksInterface } from "@/components/HowItWorksInterface";

const HowItWorks = () => {
  return (
    <>
      <Header />
      <AreaBackground>
        <HowItWorksInterface />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default HowItWorks;
