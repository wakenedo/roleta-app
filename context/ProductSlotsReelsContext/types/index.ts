import { Product } from "@/components/Slots/types";
import { ReactNode } from "react";

type ProductSlotsReelsContextType = {
  reels: Product[][];
  pos: number[];
  transitionDurations: number[];
  animating: boolean[];
  activePlaceholder: boolean;
  spinning: boolean;
  CELL_HEIGHT: number;
  VISIBLE: number;
};

type ProviderProps = {
  selectedProducts: Product[];
  spinning: boolean;
  children: ReactNode;
};

export type { ProductSlotsReelsContextType, ProviderProps };
