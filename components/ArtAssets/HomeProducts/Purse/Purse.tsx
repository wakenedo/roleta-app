import Image from "next/image";
import PurseImage from "@/public/ProductImages/purse.png";

const Purse = () => {
  return (
    <>
      <Image src={PurseImage} alt="Purse" width={100} />
    </>
  );
};
export default Purse;
