"use client";

import { motion } from "framer-motion";

const COUNT = 11;

const MonetizeYourAudienceAnimation = () => {
  return (
    <section className="h-full w-full overflow-hidden ">
      <div className="relative flex items-end justify-center h-[320px] mb-22">
        {Array.from({ length: COUNT }).map((_, i) => {
          const center = (COUNT - 1) / 2;

          // normalize x from -1 → 1
          const xNorm = (i - center) / center;

          // horizontal spread
          const x = xNorm * 260;

          // parabola curve (this is the magic)
          const y = -180 * (1 - xNorm * xNorm);

          // depth illusion
          const scale = 0.8 + (1 - Math.abs(xNorm)) * 0.5;

          return (
            <motion.span
              key={i}
              className="absolute text-5xl md:text-7xl font-bold text-amber-400"
              initial={{
                y: 220,
                x: 0,
                opacity: 0,
                scale: 0.4,
              }}
              animate={{
                y,
                x,
                opacity: 1,
                scale,
                rotate: xNorm * 30,
              }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 12,
                delay: i * 0.06,
              }}
            >
              $
            </motion.span>
          );
        })}

        {/* 💥 CENTER $$$ */}
        <motion.span
          className="text-8xl md:text-9xl font-bold text-amber-300 z-10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $$$
        </motion.span>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60 mb-8" />
    </section>
  );
};

export default MonetizeYourAudienceAnimation;
