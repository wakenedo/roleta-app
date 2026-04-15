import { useEffect, useState } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { BrandingStepProps } from "../../types";
import { handleFile } from "@/hooks/utils/brandingLogoHelpers";

const BrandingStep: React.FC<BrandingStepProps> = ({
  name,
  email,
  logoUrl,
  primaryColor,
  selectedPlan,
  onSave,
  setStepHeader,
  setPrimaryColor,
}) => {
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
        <div className="flex flex-col mt-2">
          <span className="text-sm ml-2">Escolha seu Logotipo</span>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile({ e, setFile })}
            className="p-2"
          />

          {/* preview */}
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-24 h-24 object-contain mt-2"
            />
          )}
        </div>

        {/* COLOR */}
        <div>
          <span className="text-sm ml-2">Escolha sua cor primária</span>

          <div className="p-2 flex items-center space-x-2">
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />

            <span style={{ color: primaryColor }}>{primaryColor}</span>
          </div>
        </div>
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
