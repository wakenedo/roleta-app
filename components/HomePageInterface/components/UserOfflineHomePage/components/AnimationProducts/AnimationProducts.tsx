"use client";

import { GoldCoin } from "@/components/ArtAssets/GoldCoin";
import { MakeUp } from "@/components/ArtAssets/HomeProducts/MakeUp";
import { ShoppingBags } from "@/components/ArtAssets/HomeProducts/ShoppingBags";
import { GameController } from "@/components/ArtAssets/HomeProducts/GameController";

import { SilverCoin } from "@/components/ArtAssets/SilverCoin";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Smartphone } from "@/components/ArtAssets/HomeProducts/Smartphone";
import { Television } from "@/components/ArtAssets/HomeProducts/Television";
import { Purse } from "@/components/ArtAssets/HomeProducts/Purse";
import { Smartwatch } from "@/components/ArtAssets/HomeProducts/Smartwatch";
import { ComputerScreen } from "@/components/ArtAssets/HomeProducts/ComputerScreen";
import { Sneakers } from "@/components/ArtAssets/HomeProducts/Sneakers";
import { LogoAlternative } from "@/components/ArtAssets/LogoAlternative";

const emojis = [
  <GameController key={"game-controller"} />,
  <Smartwatch key={"smartwatch"} />,
  <Television key={"television"} />,
  <Sneakers key={"sneakers"} />,
  <ShoppingBags key={"shopping-bags"} />,
];
const emojisTop = [
  <Purse key={"purse"} />,
  <Smartphone key={"smartphone"} />,
  <ComputerScreen key={"computer-screen"} />,
  <MakeUp key={"makeup"} />,
];

const coinsArt = [
  <GoldCoin key="gold-coin" />,
  <SilverCoin key="silver-coin" />,
];

const AnimationProducts = () => {
  const [mounted, setMounted] = useState(false);
  const [confetti, setConfetti] = useState<number[]>([]);
  const [coins, setCoins] = useState(coinsArt);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const width = containerRef.current?.offsetWidth || 4400;

    const positions = Array.from({ length: 40 }, () => Math.random() * width);

    setConfetti(positions);
    setCoins((prev) => [...prev, ...coinsArt]);
  }, []);

  if (!mounted) return null;

  const arcOffsets1 = [-610, -630, -650, -630, -610];
  const arcOffsets2 = [-690, -700, -750, -700, -690];

  return (
    <div ref={containerRef} className="relative mx-2 h-230 overflow-hidden">
      {/* 🎉 FULL WIDTH CONFETTI */}
      {confetti.map((x, i) => (
        <motion.div
          key={i}
          className="absolute text-xl "
          initial={{ y: -50, x, opacity: 0 }}
          animate={{
            y: 700,
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {coins[i % coins.length]}
        </motion.div>
      ))}
      {/* 🌊 ARC LAYER 1 */}
      <div className="absolute bottom-0 w-full flex justify-center gap-6">
        {emojis.map((emoji, i) => (
          <motion.div
            key={i}
            className="text-5xl"
            initial={{ y: 120, opacity: 0 }}
            animate={{
              y: arcOffsets1[i],
              rotate: i % 2 === 0 ? -20 : 20,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: i * 0.25,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      {/* 🌊 ARC LAYER 2 (Higher Wave) */}
      <div className="absolute bottom-0 w-full flex justify-center gap-6">
        {emojisTop.map((emoji, i) => (
          <motion.div
            key={i}
            className="text-4xl"
            initial={{ y: 160, opacity: 0 }}
            animate={{
              y: arcOffsets2[i],
              rotate: i % 2 === 0 ? 15 : -15,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              delay: 0.8 + i * 0.25,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
      {/* ✨ Center Glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.25 }}
        transition={{ delay: 2 }}
      >
        <div className="h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
      </motion.div>
      {/* 🔥 PROMOBET */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 cursor-default "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2 }}
      >
        <LogoAlternative />
      </motion.div>
      <motion.div
        className="absolute bottom-25 left-0 w-full text-center px-4 z-20 cursor-default"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <span className="text-2xl md:text-5xl font-extrabold text-[#84e9e4] drop-shadow-xl">
          Um mar de ofertas e diversão esperam por você! Descubra nossas Roletas
          de Ofertas e de nossos parceiros!
        </span>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default AnimationProducts;
