import { Product } from "@/components/Slots/types";
import SpinImage from "../../../../../../../../public/Category/SpinImage.png";
import Image from "next/image";
import { CategoryImage } from "@/components/CategoryImage";

const CardImage = ({ product }: { product: Product }) => {
  const pickImage = product.image ? product.image : SpinImage;
  const productCategory =
    product.metadata && product.metadata.category
      ? product.metadata.category
      : product.category;

  return (
    <div className="z-10 mx-2  rounded-t-md  mb-2 md:w-full w-22 shadow-lg flex items-center justify-center bg-[#00EEFF] backdrop-blur-sm">
      {product.image ? (
        <Image
          src={pickImage}
          alt={product.name}
          className="object-contain max-h-full  rounded-t-md"
        />
      ) : (
        <CategoryImage productCategory={productCategory} alt={product.name} />
      )}
    </div>
  );
};
export default CardImage;
