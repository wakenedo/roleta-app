import { useEffect, useRef } from "react";
import { cardGradientLifecycle } from "../../utils";
import { Product } from "@/components/Slots/types";

const CardDynamicGradient = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) => {
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    cardGradientLifecycle({ gradientRef, product });
  }, [product, product.tier]);
  return (
    <div
      ref={gradientRef}
      className="
          h-full
          absolute inset-0
          z-0
          will-change-transform
          translate-z-0
        "
    >
      {children}
    </div>
  );
};
export default CardDynamicGradient;
