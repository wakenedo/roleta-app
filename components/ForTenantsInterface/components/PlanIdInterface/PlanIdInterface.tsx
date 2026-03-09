"use client";

import { useTenantOnboarding } from "@/hooks/useTenantOnboarding";
import { PaymentStep } from "./components/PaymentStep";
import { BrandingStep } from "./components/BrandingStep";
import { ProductsStep } from "./components/ProductsStep";
import { RegisterStep } from "./components/RegisterStep";
import { StepHeaderInterface } from "./components/StepHeaderInterface";
import { CompleteStep } from "./components/CompleteStep";

const PlanIdInterface = ({ planId }: { planId: string }) => {
  const {
    step,
    name,
    email,
    password,
    logoUrl,
    primaryColor,
    stepHeader,
    selectedPlan,
    registerTenant,
    completePayment,
    saveBranding,
    saveProducts,
    resolveComplete,
    setName,
    setEmail,
    setPassword,
    setLogoUrl,
    setPrimaryColor,
    setStepHeader,
    setSelectedPlan,
  } = useTenantOnboarding(planId);

  const renderStep = () => {
    switch (step) {
      case "register":
        return (
          <RegisterStep
            registerTenant={registerTenant}
            email={email}
            name={name}
            password={password}
            setEmail={setEmail}
            setName={setName}
            setPassword={setPassword}
          />
        );

      case "payment":
        return (
          <PaymentStep
            name={name}
            email={email}
            onPay={completePayment}
            setStepHeader={setStepHeader}
            setSelectedPlan={setSelectedPlan}
            planId={planId}
          />
        );

      case "branding":
        return (
          <BrandingStep
            onSave={saveBranding}
            setStepHeader={setStepHeader}
            setLogoUrl={setLogoUrl}
            setPrimaryColor={setPrimaryColor}
            primaryColor={primaryColor}
            name={name}
            email={email}
            logoUrl={logoUrl}
            selectedPlan={selectedPlan}
          />
        );

      case "products":
        return (
          <ProductsStep
            onSave={saveProducts}
            setStepHeader={setStepHeader}
            selectedPlan={selectedPlan}
            logoUrl={logoUrl}
            primaryColor={primaryColor}
            name={name}
            email={email}
          />
        );

      case "complete":
        return (
          <CompleteStep
            setStepHeader={setStepHeader}
            name={name}
            email={email}
            logoUrl={logoUrl}
            primaryColor={primaryColor}
            selectedPlan={selectedPlan}
            resolveComplete={resolveComplete}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <main
        className="flex flex-col items-center w-lg mx-auto  mt-10 text-white
                  border-amber-50 border rounded-xl p-4 "
      >
        <StepHeaderInterface
          planId={planId}
          step={step}
          stepHeader={stepHeader}
        />

        <div className="flex flex-col gap-4 w-full">{renderStep()}</div>
        <div className="mb-4 mt-2">
          <span className="text-sm">{stepHeader.stepText}</span>
        </div>
      </main>
    </div>
  );
};

export default PlanIdInterface;
