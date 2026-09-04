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
}

const CategoryImage = ({
  productCategory,
  alt = "General Product",
}: CategoryImageProps) => {
  const image = CATEGORY_IMAGES[productCategory ?? "general"] ?? GeneralImage;

  return (
    <Image
      src={image}
      alt={alt}
      className="object-contain max-h-full rounded-t-md"
    />
  );
};

export default CategoryImage;
