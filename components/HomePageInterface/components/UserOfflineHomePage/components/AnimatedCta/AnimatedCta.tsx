import { AuthInterface } from "@/components/AuthInterface";
import { InfoDynamicSection } from "../InfoDynamicSection";
import { AnimationProducts } from "../AnimationProducts";

const AnimatedCta = () => {
  return (
    <div
      id="promonet-animated-CTA"
      className=" flex flex-col border-black md:mx-2 h-fit"
    >
      <AnimationProducts />
      <InfoDynamicSection />
      <div>
        <AuthInterface />
      </div>
    </div>
  );
};

export default AnimatedCta;
