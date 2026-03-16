import { useEffect } from "react";
import { TenantRegisteredInterface } from "../TenantCheckoutInterface/TenantRegisteredInterface";
import { TenantPlanAssignedInterface } from "../TenantCheckoutInterface/TenantPlanAssignedInterface";
import { BrandingStepProps } from "../../types";

const BrandingStep: React.FC<BrandingStepProps> = ({
  name,
  email,
  logoUrl,
  primaryColor,
  selectedPlan,
  onSave,
  setStepHeader,
  setLogoUrl,
  setPrimaryColor,
}) => {
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

      <>
        <div>
          <span className="md:text-sm">Branding</span>
        </div>
        <div className="border w-full flex flex-col space-y-4">
          <div className="flex flex-col mt-2">
            <span className="text-slate-100 text-sm ml-2">
              {" "}
              Escolha seu Logotipo
            </span>
            <input
              placeholder="Logo URL"
              onChange={(e) => setLogoUrl(e.target.value)}
              className="p-2 text-slate-50"
            />
          </div>

          <div>
            <span className="text-slate-100 text-sm ml-2">
              {" "}
              Escolha sua cor primária
            </span>
            <div className="border p-2 m-2 flex flex-col">
              <div className="flex space-x-2">
                <input
                  type="color"
                  defaultValue={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                />
                <div>
                  <span style={{ color: primaryColor }}>{primaryColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => onSave({ logoUrl, primaryColor })}
          className="bg-indigo-500 py-3 my-2 rounded-lg"
        >
          Salvar Branding
        </button>
      </>
    </div>
  );
};
export default BrandingStep;
