import Image from "next/image";
import SneakersImage from "@/public/ProductImages/—Pngtree—a pair of white sneakers_21047110 1.png";

const Sneakers = () => {
  return (
    <>
      <Image src={SneakersImage} alt="Sneakers" width={150} />
    </>
  );
};
export default Sneakers;
