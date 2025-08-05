"use client";

import React, { useState } from "react";
import { SlotsGame } from "./SlotsGame";
import { Product } from "./types";

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Bluetooth Headphones",
    image: "/products/headphones.jpg",
    url: "https://your-affiliate-link.com/headphones",
    price: "320",
    discount: "10%",
    discountedPrice: "288",
    tier: "common",
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "/products/watch.jpg",
    url: "https://your-affiliate-link.com/watch",
    price: "210",
    discount: "20%",
    discountedPrice: "168",
    tier: "rare",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    image: "/products/mouse.jpg",
    url: "https://your-affiliate-link.com/mouse",
    price: "450",
    discount: "30%",
    discountedPrice: "315",
    tier: "jackpot",
  },
];

const getRandomProducts = (count = 3): Product[] => {
  const shuffled = [...dummyProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Slots = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const spin = () => {
    setSpinning(true);
    setSelectedProducts([]);

    setTimeout(() => {
      const results = getRandomProducts();
      setSelectedProducts(results);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="bg-slate-800 h-auto min-h-[480px] flex flex-col rounded-b-xs text-white py-2">
      <h2 className="text-2xl font-bold mb-2 ml-2">Descubra Suas Ofertas</h2>
      <div className="border-t border-slate-600 mx-2" />
      <div className="flex mt-4 mx-2 items-center justify-center">
        <SlotsGame
          selectedProducts={selectedProducts}
          spin={spin}
          spinning={spinning}
        />
      </div>
    </div>
  );
};

export default Slots;
