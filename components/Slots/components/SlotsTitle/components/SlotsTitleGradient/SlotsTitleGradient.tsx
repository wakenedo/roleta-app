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
    <div className="font-bold md:ml-5 ml-2 md:text-5xl text-4xl w-fit text-shadow-2xs">
      <div ref={slotsTitleGradientRef}>Roleta de Ofertas</div>
    </div>
  );
};
export default SlotsTitleGradient;
