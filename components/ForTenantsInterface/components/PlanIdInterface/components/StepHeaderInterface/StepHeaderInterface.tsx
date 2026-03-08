import {
  StepHeaderProps,
  TenantRegisterStep,
} from "@/hooks/useTenantOnboarding";

const StepHeaderInterface = ({
  stepHeader,
  planId,
  step,
}: {
  stepHeader: StepHeaderProps;
  planId: string;
  step: TenantRegisterStep;
}) => {
  const displayPlanIdSection =
    step != "payment" &&
    step != "branding" &&
    step != "products" &&
    step != "completed";

  return (
    <>
      <div className="w-full pb-1">
        <span className="text-left md:text-lg font-bold">
          Passo {stepHeader.stepNumber}
        </span>
      </div>
      <div className="flex flex-col items-center border text-center w-full ">
        <div className="flex flex-col pb-3 pt-1">
          <span className="capitalize text-2xl font-extrabold tracking-wider">
            {step}
          </span>
        </div>
      </div>
      {displayPlanIdSection ? (
        <>
          <div className="w-full py-1">
            <span className="text-left md:text-lg font-bold ">
              Plano selecionado{" "}
            </span>
          </div>
          <div className="flex flex-col items-center border text-center w-full ">
            <div className="flex flex-col pb-3 pt-1">
              <span className="md:text-2xl uppercase font-extrabold text-center">
                {planId}
              </span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default StepHeaderInterface;
