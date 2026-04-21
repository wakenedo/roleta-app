import Image from "next/image";
import ControllerImage from "@/public/ProductImages/freepik_video-game-controller-sle_2794523522 1.png";

const GameController = () => {
  return (
    <>
      <Image src={ControllerImage} alt="controller" width={150} />
    </>
  );
};
export default GameController;
