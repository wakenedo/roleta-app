"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ArtTitle from "@/public/PROMOBET.png";
import FArtTitle from "@/public/PROMOBETFULL.png";
import ArtTitleSm from "@/public/PROMOBETSM.png";
import FArtTitleSm from "@/public/PROMOBETFULLSM.png";

interface AnimatedTitleProps {
  small?: boolean;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ small = false }) => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full md:w-100 flex ${
        small ? "" : "justify-center h-[60px] md:h-[100px]"
      } items-center my-2 `}
    >
      <Image
        src={small ? ArtTitleSm : ArtTitle}
        alt="promobet"
        className={`absolute transition-opacity duration-1500 ${
          small ? "w-25" : ""
        } ${showFirst ? "opacity-100" : "opacity-0"}`}
      />
      <Image
        src={small ? FArtTitleSm : FArtTitle}
        alt="Fpromobet"
        className={`absolute transition-opacity duration-1500 ${
          small ? "w-25" : ""
        } ${showFirst ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default AnimatedTitle;
