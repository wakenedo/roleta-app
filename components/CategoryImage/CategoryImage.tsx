import Image, { StaticImageData } from "next/image";

import GeneralImage from "../../public/Category/General.png";

import ElectronicsImage from "../../public/Category/Eletronics.png";
import FashionImage from "../../public/Category/Fashion.png";
import BeautyImage from "../../public/Category/Beauty.png";

//Need to add the respective assets for each category. For now, they are all using a placeholder.
import HomeImage from "../../public/Category/Home.png";
import HealthImage from "../../public/Category/Health.png";
import SportsImage from "../../public/Category/Sports.png";
import ToysImage from "../../public/Category/Toys.png";
import PetsImage from "../../public/Category/Pets.png";
import AutomotiveImage from "../../public/Category/Auto.png";
import BooksImage from "../../public/Category/Books.png";
import OfficeImage from "../../public/Category/Office.png";
import FoodImage from "../../public/Category/Food.png";
import BabyImage from "../../public/Category/Baby.png";
import GamingImage from "../../public/Category/Game.png";
import ToolsImage from "../../public/Category/Tools.png";
import JewelryImage from "../../public/Category/Jewels.png";

const CATEGORY_IMAGES: Record<string, StaticImageData> = {
  electronics: ElectronicsImage,
  home: HomeImage,
  fashion: FashionImage,
  beauty: BeautyImage,
  health: HealthImage,
  sports: SportsImage,
  toys: ToysImage,
  pets: PetsImage,
  automotive: AutomotiveImage,
  books: BooksImage,
  office: OfficeImage,
  food: FoodImage,
  baby: BabyImage,
  gaming: GamingImage,
  tools: ToolsImage,
  jewelry: JewelryImage,
  general: GeneralImage,
};

interface CategoryImageProps {
  productCategory?: string;
  alt?: string;
  object?: "object-contain" | "object-cover";
  rounded?:
    | "rounded-t-sm"
    | "rounded-t-md"
    | "rounded-t-lg"
    | "rounded-t-2xl"
    | "rounded-b-sm"
    | "rounded-b-md"
    | "rounded-b-lg"
    | "rounded-b-2xl"
    | "rounded-r-sm"
    | "rounded-r-md"
    | "rounded-r-lg"
    | "rounded-r-2xl"
    | "rounded-l-sm"
    | "rounded-l-md"
    | "rounded-l-lg"
    | "rounded-l-2xl"
    | "rounded"
    | "rounded-full"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg";
}

const CategoryImage = ({
  productCategory,
  alt = "General Product",
  object = "object-contain",
  rounded = "rounded-t-md",
}: CategoryImageProps) => {
  const image = CATEGORY_IMAGES[productCategory ?? "general"] ?? GeneralImage;

  return (
    <Image
      src={image}
      alt={alt}
      className={`${object} max-h-full ${rounded}`}
    />
  );
};

export default CategoryImage;
