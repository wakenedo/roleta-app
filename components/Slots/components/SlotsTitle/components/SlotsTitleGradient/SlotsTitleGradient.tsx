import { useEffect, useRef } from "react";
import { slotsTitleGradientLifecycle } from "../../utils";

const SlotsTitleGradient = () => {
  const slotsTitleGradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    slotsTitleGradientLifecycle({
      slotsTitleGradientRef: slotsTitleGradientRef,
    });
  }, []);

  return (
    <div className="font-bold ml-8 md:text-4xl">
      <div ref={slotsTitleGradientRef}>Roleta de Ofertas</div>
    </div>
  );
};
export default SlotsTitleGradient;
