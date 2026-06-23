import { PaymentStep } from "./components/PaymentStep";
import { BrandingStep } from "./components/BrandingStep";
import { ProductsStep } from "./components/ProductsStep";
import { RegisterStep } from "./components/RegisterStep";
import { StepHeaderInterface } from "./components/StepHeaderInterface";
import { CompleteStep } from "./components/CompleteStep";
import { PlanIdInterfaceProps } from "./types";

const PlanIdInterface = ({
  planId,
  acceptedToS,
  checkEmailVerification,
  checkingVerification,
  completePayment,
  createAndSendVerification,
  email,
  error,
  handleAcceptToS,
  importProducts,
  importProductsCSV,
  isEmailVerified,
  isPasswordValid,
  loading,
  logoUrl,
  name,
  password,
  passwordsMatch,
  pickProducts,
  primaryColor,
  productsImported,
  registerTenant,
  resolveComplete,
  saveBranding,
  saveProducts,
  selectedPlan,
  setConfirmPassword,
  setEmail,
  setLogoUrl,
  setName,
  setPassword,
  setPrimaryColor,
  setSelectedPlan,
  setShowPassword,
  setStepHeader,
  showPassword,
  showToS,
  setShowToS,
  step,
  stepHeader,
  validations,
  confirmPassword,
  products,
  handleSubmitProducts,
  previewProducts,
  setProducts,
}: PlanIdInterfaceProps) => {
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
            checkEmailVerification={checkEmailVerification}
            createAndSendVerification={createAndSendVerification}
            checkingVerification={checkingVerification}
            isEmailVerified={isEmailVerified}
            showToS={showToS}
            setConfirmPassword={setConfirmPassword}
            setShowPassword={setShowPassword}
            setShowToS={setShowToS}
            acceptedToS={acceptedToS}
            showPassword={showPassword}
            confirmPassword={confirmPassword}
            passwordsMatch={passwordsMatch}
            validations={validations}
            isPasswordValid={isPasswordValid}
            handleAcceptToS={handleAcceptToS}
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
            importProducts={importProducts}
            importProductsCSV={importProductsCSV}
            setStepHeader={setStepHeader}
            selectedPlan={selectedPlan}
            logoUrl={logoUrl}
            primaryColor={primaryColor}
            name={name}
            email={email}
            productsImported={productsImported}
            pickProducts={pickProducts}
            handleSubmitProducts={handleSubmitProducts}
            previewProducts={previewProducts}
            products={products}
            setProducts={setProducts}
          />
        );

      case "complete":
        return (
          <CompleteStep
            name={name}
            email={email}
            logoUrl={logoUrl}
            primaryColor={primaryColor}
            selectedPlan={selectedPlan}
            products={products}
            error={error}
            loading={loading}
            setStepHeader={setStepHeader}
            resolveComplete={resolveComplete}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <main
        className="flex flex-col items-center md:w-6xl mx-auto  mt-4 text-white
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
