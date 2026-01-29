"use client";
import React, { useEffect, useRef } from "react";
import { ProductCard } from "../ProductCard";
import { ProductSlotsReelsPlaceholderInterface } from "../ProductSlotsReelsPlaceholderInterface";
import { productSlotsReelsGradient } from "./utils";
import { useProductSlotsReels } from "@/context/ProductSlotsReelsContext/ProductSlotsReelsContext";
const ProductSlotsReels: React.FC = () => {
  const {
    reels,
    pos,
    transitionDurations,
    activePlaceholder,
    spinning,
    CELL_HEIGHT,
    VISIBLE,
  } = useProductSlotsReels();

  const gradientRef = useRef<HTMLDivElement | null>(null);

  /* gradient effect stays here */
  useEffect(() => {
    productSlotsReelsGradient(gradientRef);
  }, []);

  return (
    <div className="flex flex-col items-center mb-6">
      <div
        ref={gradientRef}
        className="flex rounded-l-lg rounded-r-lg shadow-lg bg-slate-200 px-2"
      >
        {reels.map((reel, col) => {
          const translateY =
            -(pos[col] * CELL_HEIGHT) + CELL_HEIGHT * Math.floor(VISIBLE / 2);

          return (
            <div
              key={col}
              className="pb-1 px-1 overflow-hidden relative"
              style={{ height: `${CELL_HEIGHT * VISIBLE}px` }}
            >
              <div
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: `transform ${transitionDurations[col]}s cubic-bezier(.22,.98,.01,1)`,
                }}
              >
                {[...reel, ...reel].map((product, i) =>
                  !spinning && activePlaceholder ? (
                    <ProductSlotsReelsPlaceholderInterface key={i} />
                  ) : (
                    <div
                      key={`${col}-${i}`}
                      style={{ height: `${CELL_HEIGHT}px` }}
                      className="flex items-center justify-center overflow-hidden"
                    >
                      <div className="w-[95%] h-[95%] flex items-center justify-center mx-auto my-2">
                        <ProductCard product={product} />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlotsReels;
