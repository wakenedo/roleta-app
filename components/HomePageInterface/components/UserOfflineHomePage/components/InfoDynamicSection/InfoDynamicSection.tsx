import { InterfaceSwitch } from "@/components/InterfaceSwitch";
import { TenantSellingPoints } from "./components/TenantSellingPoints";
import { UserSellingPoints } from "./components/UserSellingPoints";
import { useState } from "react";

const InfoDynamicSection = () => {
  const [onToggleChange, setOnToggleChange] = useState(
    "left" as "left" | "right",
  );

  const handleToggle = (side: "left" | "right") => {
    setOnToggleChange(side);
  };
  return (
    <div>
      <h2
        className="
        text-4xl md:text-6xl font-extrabold tracking-widest 
       text-[#84e9e4]  drop-shadow-xl text-center pb-10
       cursor-default
       "
      >
        MODALIDADES
      </h2>
      <InterfaceSwitch
        leftComponent={<UserSellingPoints />}
        rightComponent={<TenantSellingPoints />}
        leftLabel="usuário"
        rightLabel="parceiro"
        onToggleChange={handleToggle}
        activeSide={onToggleChange}
      />
    </div>
  );
};

export default InfoDynamicSection;
