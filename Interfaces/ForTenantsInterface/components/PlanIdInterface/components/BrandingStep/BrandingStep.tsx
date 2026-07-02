import { useEffect, useState } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { BrandingStepProps } from "../../types";
import { LogoPickerDisplay } from "./components/LogoPickerDisplay";
import { ColorPickerDisplay } from "./components/ColorPickerDisplay";

const BrandingStep = ({
  name,
  email,
  logoUrl,
  primaryColor,
  selectedPlan,
  onSave,
  setStepHeader,
  setPrimaryColor,
}: BrandingStepProps) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setStepHeader({
      stepNumber: 3,
      stepText: "Adicione as cores e logotipo da marca",
    });
  }, []);

  return (
    <div className="flex flex-col gap-1 w-full">
      <TenantRegisteredInterface name={name} email={email} />
      <TenantPlanAssignedInterface selectedPlan={selectedPlan} />

      <div className="border w-full flex flex-col space-y-4 p-2">
        {/* LOGO */}
        <LogoPickerDisplay logoFile={file} setLogoFile={setFile} />

        {/* COLOR */}
        <ColorPickerDisplay
          primaryColor={primaryColor}
          setPrimaryColor={setPrimaryColor}
        />
      </div>

      <button
        onClick={() => onSave({ logoUrl, primaryColor }, file || undefined)}
        className="bg-indigo-500 py-3 my-2 rounded-lg"
      >
        Salvar Branding
      </button>
    </div>
  );
};
export default BrandingStep;
