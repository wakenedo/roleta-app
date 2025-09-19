"use client";
import React, { useEffect, useRef, useState } from "react";
import { Product } from "@/components/Slots/types";
import { ProductCard } from "../ProductCard";
import { ProductSlotsReelsPlaceholderInterface } from "../ProductSlotsReelsPlaceholderInterface";

const REEL_LENGTH = 24;
const VISIBLE = 1;
const CELL_HEIGHT = 550;

interface ProductReelsProps {
  selectedProducts: Product[];
  spinning: boolean;
}

const ProductSlotsReels: React.FC<ProductReelsProps> = ({
  selectedProducts,
  spinning,
}) => {
  // reel state
  const [reels, setReels] = useState<Product[][]>([[], [], []]);
  const [pos, setPos] = useState<number[]>([0, 0, 0]);
  const [transitionDurations, setTransitionDurations] = useState<number[]>([
    0, 0, 0,
  ]);
  const [animating, setAnimating] = useState<boolean[]>([false, false, false]);
  const [activePlaceholder, setActivePlaceholder] = useState(true);

  const [shouldStop, setShouldStop] = useState(false);
  const intervalsRef = useRef<(number | null)[]>([null, null, null]);

  const filler: Product = {
    id: "placeholder",
    name: "???",
    image: "/",
    tier: "common",
    url: "",
    price: "????",
    discountedPrice: "????",
    discount: "????",
    store: "????",
    campaign: { campaignLink: "", couponCode: "", description: "" },
  };

  // initialize reels
  useEffect(() => {
    const newReels = [0, 1, 2].map(() =>
      Array.from({ length: REEL_LENGTH }, () => filler)
    );
    setReels(newReels);
    setPos([0, 0, 0]);
  }, []);

  // detect new results
  useEffect(() => {
    if (selectedProducts.length > 0) {
      setShouldStop(true);
      const newReels = [0, 1, 2].map((col) => {
        const reel = Array.from({ length: REEL_LENGTH }, () => filler);
        const targetIndex = Math.floor(REEL_LENGTH / 2);
        if (selectedProducts[col]) {
          reel[targetIndex] = selectedProducts[col];
        }
        return reel;
      });
      setReels(newReels);
    }
  }, [selectedProducts]);

  // start spinning animation
  useEffect(() => {
    if (!spinning) return;

    setTransitionDurations([10.8, 10.8, 10.8]); // quick steps
    setAnimating([!animating, !animating, !animating]);

    const intervalMs = 100;

    for (let col = 0; col < 3; col++) {
      intervalsRef.current[col] = window.setInterval(() => {
        setPos((prev) => {
          const next = [...prev];
          next[col] = prev[col] + 1;
          return next;
        });
      }, intervalMs);
    }
  }, [spinning]);

  // loop reset (prevent snap)
  useEffect(() => {
    pos.forEach((p, col) => {
      if (p >= REEL_LENGTH) {
        setTransitionDurations((prev) => {
          const next = [...prev];
          next[col] = 0; // disable transition
          return next;
        });
        setPos((prev) => {
          const next = [...prev];
          next[col] = 0;
          return next;
        });
        requestAnimationFrame(() => {
          setTransitionDurations((prev) => {
            const next = [...prev];
            next[col] = 0.3;
            return next;
          });
        });
      }
    });
  }, [pos]);

  // stop reels like slot machine (staggered)
  useEffect(() => {
    if (!shouldStop) return;

    const baseStopDelay = 400;
    const gapBetweenStops = 400;

    for (let col = 0; col < 3; col++) {
      setTimeout(() => {
        if (intervalsRef.current[col]) {
          clearInterval(intervalsRef.current[col] as number);
          intervalsRef.current[col] = null;
        }

        setTransitionDurations((prev) => {
          const next = [...prev];
          next[col] = 1.6 + col * 0.3; // slower ease for each col
          return next;
        });

        setPos((prev) => {
          const next = [...prev];
          next[col] = Math.floor(REEL_LENGTH / 2); // land middle
          return next;
        });

        setAnimating((prev) => {
          const next = [...prev];
          next[col] = false;
          return next;
        });
      }, baseStopDelay + col * gapBetweenStops);
    }

    setShouldStop(false);
    setActivePlaceholder(false);
  }, [shouldStop]);

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex rounded-l-lg rounded-r-lg  shadow-lg bg-slate-200 ">
        {reels.map((reel, col) => {
          const transSec = transitionDurations[col];
          const translateY =
            -(pos[col] * CELL_HEIGHT) + CELL_HEIGHT * Math.floor(VISIBLE / 2);

          return (
            <div
              key={col}
              className=" p-1 overflow-hidden relative "
              style={{ height: `${CELL_HEIGHT * VISIBLE}px` }}
            >
              <div
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: `transform ${transSec}s cubic-bezier(.22,.98,.01,1)`,
                }}
              >
                {/* duplicate for seamless scroll */}
                {[...reel, ...reel].map((product, i) => {
                  return spinning === false && activePlaceholder ? (
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
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductSlotsReels;
