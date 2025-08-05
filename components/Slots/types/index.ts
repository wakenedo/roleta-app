interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
  price: string;
  discount: string;
  discountedPrice: string;
  tier?: "common" | "jackpot" | "rare";
}

interface ProductCardProps {
  product: Product;
}

interface SlotsGameProps {
  spinning: boolean;
  selectedProducts: Product[];
  spin: () => void;
}

export type { SlotsGameProps, Product, ProductCardProps };
