import Image from "next/image";
import AlternativeLogo from "@/public/Logo/logoAlternativo.png";

const LogoAlternative = () => {
  return (
    <>
      <Image src={AlternativeLogo} alt="Logo Alternativo" width={700} />
    </>
  );
};
export default LogoAlternative;
