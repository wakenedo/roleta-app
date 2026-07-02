import { PlanIdInterface } from "./components/PlanIdInterface";
import { TenantSubscriptionInterface } from "./components/TenantSubscriptionInterface";
import { ForTenantsInterfaceProps } from "./components/PlanIdInterface/types";
import { useSearchParams } from "next/navigation";
import { TenantsHowItWorksInterface } from "./components/TenantHowItWorksInterface";

const ForTenantsInterface = ({
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
  importProductsJSON,
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
  tenantSubscription,
  handleSubmitProducts,
  previewProducts,
  setProducts,
  currentTenantPlan,
  tenantMaxedPlan,
  emailValue,
  setEmailValue,
  handleChange,
  validEmail,
  showValidation,
  strengthMeta,
  showMatchState,
  handleNameChange,
  nameValue,
}: ForTenantsInterfaceProps) => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  console.log("FOR TENANTS PLAN:", planId);

  if (planId) {
    return (
      <PlanIdInterface
        planId={planId}
        checkEmailVerification={checkEmailVerification}
        checkingVerification={checkingVerification}
        completePayment={completePayment}
        createAndSendVerification={createAndSendVerification}
        email={email}
        handleAcceptToS={handleAcceptToS}
        importProducts={importProducts}
        importProductsCSV={importProductsCSV}
        importProductsJSON={importProductsJSON}
        isEmailVerified={isEmailVerified}
        isPasswordValid={isPasswordValid}
        logoUrl={logoUrl}
        name={name}
        password={password}
        passwordsMatch={passwordsMatch}
        pickProducts={pickProducts}
        primaryColor={primaryColor}
        productsImported={productsImported}
        registerTenant={registerTenant}
        validations={validations}
        stepHeader={stepHeader}
        step={step}
        saveBranding={saveBranding}
        setEmail={setEmail}
        resolveComplete={resolveComplete}
        saveProducts={saveProducts}
        selectedPlan={selectedPlan}
        setLogoUrl={setLogoUrl}
        setName={setName}
        setPassword={setPassword}
        setPrimaryColor={setPrimaryColor}
        setSelectedPlan={setSelectedPlan}
        setStepHeader={setStepHeader}
        loading={loading}
        error={error}
        acceptedToS={acceptedToS}
        setConfirmPassword={setConfirmPassword}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
        showToS={showToS}
        confirmPassword={confirmPassword}
        products={products}
        setShowToS={setShowToS}
        handleSubmitProducts={handleSubmitProducts}
        previewProducts={previewProducts}
        setProducts={setProducts}
        emailValue={emailValue}
        setEmailValue={setEmailValue}
        handleChange={handleChange}
        validEmail={validEmail}
        showValidation={showValidation}
        showMatchState={showMatchState}
        strengthMeta={strengthMeta}
        handleNameChange={handleNameChange}
        nameValue={nameValue}
      />
    );
  }
  if (tenantSubscription) {
    return (
      <TenantSubscriptionInterface tenantSubscription={tenantSubscription} />
    );
  }
  return (
    <TenantsHowItWorksInterface
      currentTenantPlan={currentTenantPlan}
      tenantMaxedPlan={tenantMaxedPlan}
    />
  );
};
export default ForTenantsInterface;
