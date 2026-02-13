"use client";
import React from "react";
import { ProductCard } from "../ProductCard";
import { ProductSlotsReelsPlaceholderInterface } from "../ProductSlotsReelsPlaceholderInterface";
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

  return (
    <div className="flex flex-col md:items-center w-full px-2">
      <div className="relative w-full flex rounded-lg justify-around overflow-hidden px-1">
        <div
          className="absolute inset-0 rounded-lg pointer-events-none 
    shadow-[inset_4px_4px_8px_rgba(0,0,0,0.25)] w-full"
        />
        {reels.map((reel, col) => {
          const translateY =
            -(pos[col] * CELL_HEIGHT) + CELL_HEIGHT * Math.floor(VISIBLE / 2);

          return (
            <div
              key={col}
              className="pb-1 md:mx-auto  overflow-hidden relative  md:w-fit"
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
                      <div className=" flex items-center justify-center mx-auto my-2">
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
