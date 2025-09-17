"use client";
import React, { useEffect, useRef, useState } from "react";
import { Product } from "@/components/Slots/types";
import { ProductCard } from "../ProductCard";
import { getAuth } from "firebase/auth";

const REEL_LENGTH = 24;
const VISIBLE = 1;
const CELL_HEIGHT = 550;

interface ProductReelsProps {
  selectedProducts: Product[];
  spinning: boolean;
  spin: (idToken: string) => Promise<void>;
}

const ProductSlotsReels: React.FC<ProductReelsProps> = ({
  selectedProducts,
  spinning,
  spin,
}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user?.uid || "guest";

  const MAX_SPINS_PER_DAY = 5000;
  const [spinsToday, setSpinsToday] = useState(0);

  // reel state
  const [reels, setReels] = useState<Product[][]>([[], [], []]);
  const [pos, setPos] = useState<number[]>([0, 0, 0]);
  const [transitionDurations, setTransitionDurations] = useState<number[]>([
    0, 0, 0,
  ]);
  const [animating, setAnimating] = useState<boolean[]>([false, false, false]);

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

  // load spin count
  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem(`spins-${uid}-${today}`);
    setSpinsToday(stored ? parseInt(stored) : 0);
  }, [uid]);

  // handle spin click
  const handleSpin = async () => {
    if (spinning || spinsToday >= MAX_SPINS_PER_DAY) return;

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.warn("User not logged in");
      return;
    }

    const idToken = await user.getIdToken();
    if (!idToken) return;

    const newCount = spinsToday + 1;
    const today = new Date().toDateString();
    localStorage.setItem(`spins-${uid}-${today}`, newCount.toString());
    setSpinsToday(newCount);

    spin(idToken);
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

    setTransitionDurations([0.3, 0.3, 0.3]); // quick steps
    setAnimating([true, true, true]);

    const intervalMs = 180;

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

    const baseStopDelay = 800;
    const gapBetweenStops = 800;

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
  }, [shouldStop]);

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="flex">
        {reels.map((reel, col) => {
          const transSec = transitionDurations[col];
          const translateY =
            -(pos[col] * CELL_HEIGHT) + CELL_HEIGHT * Math.floor(VISIBLE / 2);

          return (
            <div
              key={col}
              className="rounded-lg p-1 shadow-lg bg-slate-300 overflow-hidden relative w-50"
              style={{ height: `${CELL_HEIGHT * VISIBLE}px` }}
            >
              <div
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: `transform ${transSec}s cubic-bezier(.22,.98,.01,1)`,
                }}
              >
                {/* duplicate for seamless scroll */}
                {[...reel, ...reel].map((product, i) => (
                  <div
                    key={`${col}-${i}`}
                    style={{ height: `${CELL_HEIGHT}px` }}
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <div className="w-[95%] h-[95%] flex items-center justify-center mx-auto my-2">
                      <ProductCard product={product} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition disabled:opacity-50"
      >
        {spinning ? "Girando..." : "Spin"}
      </button>
    </div>
  );
};
export default ProductSlotsReels;
