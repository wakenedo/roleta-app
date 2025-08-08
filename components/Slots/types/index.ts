interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
  price: string;
  discount: string;
  discountedPrice: string;
  tier?: "common" | "jackpot" | "rare";
  store: string;
  campaign: CampaignProps;
}

interface CampaignProps {
  campaignLink: string;
  couponCode: string | null;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

interface SlotsGameProps {
  spinning: boolean;
  selectedProducts: Product[];
  spin: (idToken: string) => Promise<void>;
}

export type { SlotsGameProps, Product, ProductCardProps };
