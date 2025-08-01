"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtTitle from "@/public/PROMOBET.png";
import FArtTitle from "@/public/PROMOBETFULL.png";

const AnimatedTitle = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center my-2 h-[60px] md:h-[100px]">
      <Image
        src={ArtTitle}
        alt="promobet"
        className={`absolute transition-opacity duration-1500 ${
          showFirst ? "opacity-100" : "opacity-0"
        }`}
      />
      <Image
        src={FArtTitle}
        alt="Fpromobet"
        className={`absolute transition-opacity duration-1500 ${
          showFirst ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default AnimatedTitle;
