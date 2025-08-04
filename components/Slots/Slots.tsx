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
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "/products/watch.jpg",
    url: "https://your-affiliate-link.com/watch",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    image: "/products/mouse.jpg",
    url: "https://your-affiliate-link.com/mouse",
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
    <div className="bg-slate-900 h-auto min-h-[480px] flex flex-col  text-white py-2">
      <h2 className="text-2xl font-bold mb-2 ml-2">Descubra Suas Ofertas</h2>
      <div className="border-t border-slate-600 mx-2" />
      <div className="mt-4 mx-2">
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
