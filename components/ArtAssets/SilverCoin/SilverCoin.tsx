"use client";

import Image from "next/image";
import SilverCoins from "../../../public/silverCoins.png";

const SilverCoin = () => {
  return (
    <>
      <Image src={SilverCoins} alt="Silver Coin" width={20} height={20} />
    </>
  );
};
export default SilverCoin;
