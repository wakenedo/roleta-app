interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
}

interface SlotsGameProps {
  spinning: boolean;
  selectedProducts: Product[];
  spin: () => void;
}

export type { SlotsGameProps, Product };
