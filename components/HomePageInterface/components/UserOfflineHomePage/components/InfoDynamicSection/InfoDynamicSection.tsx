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
    <InterfaceSwitch
      leftComponent={<UserSellingPoints />}
      rightComponent={<TenantSellingPoints />}
      leftLabel="user"
      rightLabel="tenant"
      onToggleChange={handleToggle}
      activeSide={onToggleChange}
    />
  );
};

export default InfoDynamicSection;
