"use client";
import { AreaBackground } from "@/backgrounds/AreaBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { TenantProduct } from "@/context/TenantContext/types";
import { useProductsImport } from "@/hooks/useProductsImport";
import { useTenantOnboarding } from "@/hooks/useTenantOnboarding";
import { ForTenantsInterface } from "@/Interfaces/ForTenantsInterface";
import {
  isValidEmail,
  MAX_LENGTH,
  normalizeEmail,
  sanitize,
} from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/utils";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ForTenants = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const { tenant, products, loading, error, setProducts, refresh, setLoading } =
    useTenant();
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
    importProducts,
    importProductsCSV,
    importProductsJSON,
    checkEmailVerification,
    createAndSendVerification,
    checkingVerification,
    isEmailVerified,
  } = useTenantOnboarding(planId);

  const [showToS, setShowToS] = useState(false);
  const [acceptedToS, setAcceptedToS] = useState(false);
  const [emailValue, setEmailValue] = useState(email);
  const [nameValue, setNameValue] = useState(name);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordsMatch = password === confirmPassword;

  const passwordRules = {
    length: (v: string) => v.length >= 8,
    uppercase: (v: string) => /[A-Z]/.test(v),
    lowercase: (v: string) => /[a-z]/.test(v),
    number: (v: string) => /[0-9]/.test(v),
    symbol: (v: string) => /[^A-Za-z0-9]/.test(v),
  };

  const validations = {
    length: passwordRules.length(password),
    uppercase: passwordRules.uppercase(password),
    lowercase: passwordRules.lowercase(password),
    number: passwordRules.number(password),
    symbol: passwordRules.symbol(password),
  };

  const isPasswordValid = Object.values(validations).every(Boolean);

  const productsImported = useProductsImport({
    selectedPlan,
    importProductsCSV,
    importProductsJSON,
    refresh,
    setTenantLoading: setLoading,
  });

  const { validateProducts, file, clearImport } = productsImported;

  const handleSubmitProducts = async () => {
    if (!file) return;

    // 🧾 CSV FLOW
    if (file.name.endsWith(".csv")) {
      const result = (await importProductsCSV(file, "onboard", false)) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      clearImport();
      return;
    }
    if (file.name.endsWith(".json")) {
      const result = (await importProductsJSON(file, "onboard", false)) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      clearImport();
      return;
    }

    console.log("Products validated ✔");
  };

  const isCSV = productsImported.file?.name.endsWith(".csv");

  const previewProducts = isCSV ? products : productsImported.products;

  const pickProducts =
    productsImported.products.length > 0 ? productsImported.products : products;

  const handleAcceptToS = () => {
    setAcceptedToS(true);
    setShowToS(false);
  };

  const handleChange = (raw: string) => {
    let clean = normalizeEmail(raw);

    if (clean.length > MAX_LENGTH) {
      clean = clean.slice(0, MAX_LENGTH);
    }

    setEmailValue(clean);
    setEmail(clean);
  };

  const handleNameChange = (raw: string) => {
    let clean = sanitize(raw);

    if (clean.length > MAX_LENGTH) {
      clean = clean.slice(0, MAX_LENGTH);
    }

    setNameValue(clean);
    setName(clean);
  };

  const validEmail = isValidEmail(emailValue);
  const showValidation = emailValue.length > 0;

  const tenantSubscription = tenant?.subscriptionMode;

  const CURRENT_TENANT_PLAN = tenant?.subscriptionMode;
  const tenantMaxedPlan = tenant?.subscriptionMode === "tenantPremium";

  const strength = Object.values(validations).filter(Boolean).length;

  const getStrength = () => {
    if (strength === 0)
      return { label: "", width: "0%", color: "bg-slate-500" };
    if (strength <= 2)
      return { label: "Fraca", width: "33%", color: "bg-red-500" };
    if (strength <= 4)
      return { label: "Média", width: "66%", color: "bg-yellow-500" };
    return { label: "Forte", width: "100%", color: "bg-green-500" };
  };

  const strengthMeta = getStrength();

  const showMatchState = confirmPassword.length > 0;

  return (
    <HeaderAndFooterInterface>
      <AreaBackground>
        <ForTenantsInterface
          planId={planId}
          error={error}
          tenant={tenant}
          selectedPlan={selectedPlan}
          tenantSubscription={tenantSubscription}
          currentTenantPlan={CURRENT_TENANT_PLAN}
          tenantMaxedPlan={tenantMaxedPlan}
          primaryColor={primaryColor}
          logoUrl={logoUrl}
          showToS={showToS}
          acceptedToS={acceptedToS}
          step={step}
          stepHeader={stepHeader}
          name={name}
          nameValue={nameValue}
          email={email}
          emailValue={emailValue}
          validEmail={validEmail}
          isEmailVerified={isEmailVerified}
          showMatchState={showMatchState}
          password={password}
          showPassword={showPassword}
          strengthMeta={strengthMeta}
          passwordsMatch={passwordsMatch}
          confirmPassword={confirmPassword}
          isPasswordValid={isPasswordValid}
          loading={loading}
          showValidation={showValidation}
          validations={validations}
          checkingVerification={checkingVerification}
          products={products}
          pickProducts={pickProducts}
          previewProducts={previewProducts}
          productsImported={productsImported}
          completePayment={completePayment}
          handleAcceptToS={handleAcceptToS}
          checkEmailVerification={checkEmailVerification}
          createAndSendVerification={createAndSendVerification}
          handleChange={handleChange}
          handleNameChange={handleNameChange}
          importProducts={importProducts}
          importProductsCSV={importProductsCSV}
          importProductsJSON={importProductsJSON}
          registerTenant={registerTenant}
          saveBranding={saveBranding}
          resolveComplete={resolveComplete}
          saveProducts={saveProducts}
          setLogoUrl={setLogoUrl}
          setEmail={setEmail}
          setName={setName}
          setPassword={setPassword}
          setPrimaryColor={setPrimaryColor}
          setSelectedPlan={setSelectedPlan}
          setStepHeader={setStepHeader}
          setConfirmPassword={setConfirmPassword}
          setShowPassword={setShowPassword}
          setShowToS={setShowToS}
          handleSubmitProducts={handleSubmitProducts}
          setProducts={setProducts}
          setEmailValue={setEmailValue}
        />
      </AreaBackground>
    </HeaderAndFooterInterface>
  );
};
export default ForTenants;
