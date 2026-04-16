import Image from "next/image";
import TelevisionImage from "@/public/ProductImages/freepik_smart-tv-ultraslim-profil_2794496563 1.png";

const Television = () => {
  return (
    <>
      <Image src={TelevisionImage} alt="Television" width={150} />
    </>
  );
};
export default Television;
