import { Product } from "@/components/Slots/types";
import { useEffect, useRef } from "react";
import { badgeGradientLifecycle } from "../../utils";

const BadgeDynamicGradient = ({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) => {
  const badgeGradientRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    badgeGradientLifecycle({ badgeGradientRef, product });
  }, [product, product.tier]);
  return (
    <div
      ref={badgeGradientRef}
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
export default BadgeDynamicGradient;
