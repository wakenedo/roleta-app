import Image from "next/image";
import MakeUpImage from "@/public/ProductImages/Makeup.png";

const MakeUp = () => {
  return (
    <>
      <Image src={MakeUpImage} alt="Makeup" width={150} />
    </>
  );
};
export default MakeUp;
