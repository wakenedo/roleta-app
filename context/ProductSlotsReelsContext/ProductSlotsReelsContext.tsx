"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Product } from "@/components/Slots/types";
import {
  FILLER,
  REEL_LENGTH,
  CELL_HEIGHT,
  VISIBLE,
} from "@/components/Slots/SlotsGame/components/ProductSlotsReels/enum";
import { ProductSlotsReelsContextType, ProviderProps } from "./types";

const ProductSlotsReelsContext =
  createContext<ProductSlotsReelsContextType | null>(null);

export const ProductSlotsReelsProvider: React.FC<ProviderProps> = ({
  selectedProducts,
  spinning,
  children,
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

  /* --------------------------------------------------
     Initialize reels
  -------------------------------------------------- */
  useEffect(() => {
    const newReels = [0, 1, 2].map(() =>
      Array.from({ length: REEL_LENGTH }, () => FILLER),
    );
    setReels(newReels);
    setPos([0, 0, 0]);
  }, []);

  /* --------------------------------------------------
     Detect new results
  -------------------------------------------------- */
  useEffect(() => {
    if (!selectedProducts.length) return;

    setShouldStop(true);

    const newReels = [0, 1, 2].map((col) => {
      const reel = Array.from({ length: REEL_LENGTH }, () => FILLER);
      const targetIndex = Math.floor(REEL_LENGTH / 2);

      if (selectedProducts[col]) {
        reel[targetIndex] = selectedProducts[col];
      }

      return reel;
    });

    setReels(newReels);
  }, [selectedProducts]);

  /* --------------------------------------------------
     Start spinning
  -------------------------------------------------- */
  useEffect(() => {
    if (!spinning) return;

    setTransitionDurations([10.8, 10.8, 10.8]);
    setAnimating((prev) => prev.map(() => true));

    const intervalMs = 100;

    for (let col = 0; col < 3; col++) {
      intervalsRef.current[col] = window.setInterval(() => {
        setPos((prev) => {
          const next = [...prev];
          next[col] += 1;
          return next;
        });
      }, intervalMs);
    }
  }, [spinning]);

  /* --------------------------------------------------
     Loop reset (prevent snap)
  -------------------------------------------------- */
  useEffect(() => {
    pos.forEach((p, col) => {
      if (p >= REEL_LENGTH) {
        setTransitionDurations((prev) => {
          const next = [...prev];
          next[col] = 0;
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

  /* --------------------------------------------------
     Stop reels (staggered)
  -------------------------------------------------- */
  useEffect(() => {
    if (!shouldStop) return;

    const baseDelay = 400;
    const gap = 400;

    for (let col = 0; col < 3; col++) {
      setTimeout(
        () => {
          if (intervalsRef.current[col]) {
            clearInterval(intervalsRef.current[col]!);
            intervalsRef.current[col] = null;
          }

          setTransitionDurations((prev) => {
            const next = [...prev];
            next[col] = 1.6 + col * 0.3;
            return next;
          });

          setPos((prev) => {
            const next = [...prev];
            next[col] = Math.floor(REEL_LENGTH / 2);
            return next;
          });

          setAnimating((prev) => {
            const next = [...prev];
            next[col] = false;
            return next;
          });
        },
        baseDelay + col * gap,
      );
    }

    setShouldStop(false);
    setActivePlaceholder(false);
  }, [shouldStop]);

  return (
    <ProductSlotsReelsContext.Provider
      value={{
        reels,
        pos,
        transitionDurations,
        animating,
        activePlaceholder,
        spinning,
        CELL_HEIGHT,
        VISIBLE,
      }}
    >
      {children}
    </ProductSlotsReelsContext.Provider>
  );
};

/* --------------------------------------------------
   Hook
-------------------------------------------------- */
export const useProductSlotsReels = () => {
  const ctx = useContext(ProductSlotsReelsContext);
  if (!ctx) {
    throw new Error(
      "useProductSlotsReels must be used within ProductSlotsReelsProvider",
    );
  }
  return ctx;
};
