import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookiesPolicyInterface } from "@/Interfaces/CookiesPolicyInterface";

const CookiesPolicy = () => {
  return (
    <>
      <Header />
      <CookiesPolicyInterface />
      <Footer />
    </>
  );
};
export default CookiesPolicy;
