"use client";
import Image from "next/image";
import GoldCoins from "../../../public/goldCoins.png";

const GoldCoin = () => {
  return (
    <>
      <Image src={GoldCoins} alt="Gold Coin" width={30} height={30} />
    </>
  );
};
export default GoldCoin;
