import { Product } from "@/components/Slots/types";

const REEL_LENGTH = 24;
const VISIBLE = 1;
const CELL_HEIGHT = 550;

const FILLER: Product = {
  id: "placeholder",
  name: "???",
  image: "/",
  tier: "common",
  url: "",
  price: "????",
  discountedPrice: "????",
  discount: "????",
  store: "????",
  campaign: { campaignLink: "", couponCode: "", description: "" },
};

export { REEL_LENGTH, VISIBLE, CELL_HEIGHT, FILLER };
