"use client";
import { Footer } from "@/components/Footer";
import { ForTenantsInterface } from "@/components/ForTenantsInterface";

import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { TenantProduct } from "@/context/TenantContext/types";
import { useProductsImport } from "@/hooks/useProductsImport";
import { useTenantOnboarding } from "@/hooks/useTenantOnboarding";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const ForTenants = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  const { tenant, products, loading, error, setProducts } = useTenant();
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
    checkEmailVerification,
    createAndSendVerification,
    checkingVerification,
    isEmailVerified,
  } = useTenantOnboarding(planId);

  const [showToS, setShowToS] = useState(false);
  const [acceptedToS, setAcceptedToS] = useState(false);
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
  });

  const { validateProducts, file } = productsImported;

  const handleSubmitProducts = async () => {
    if (!file) return;

    // 🧾 CSV FLOW
    if (file.name.endsWith(".csv")) {
      const result = (await importProductsCSV(file, false)) as {
        imported: number;
        products: TenantProduct[];
      };
      setProducts(result.products);
      console.log("Imported ✔", result);
      validateProducts();
      alert(`Imported ${result.imported} products`);
      return;
    }

    // 🧠 JSON FLOW
    const valid = validateProducts();
    if (!valid) return;

    await importProducts(productsImported.products);
    setProducts(productsImported.products);

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
  const tenantSubscription = tenant?.subscriptionMode;

  const CURRENT_TENANT_PLAN = tenant?.subscriptionMode;
  const tenantMaxedPlan = tenant?.subscriptionMode === "tenantPremium";
  return (
    <>
      <Header />
      <AreaBackground>
        <ForTenantsInterface
          planId={planId}
          checkEmailVerification={checkEmailVerification}
          checkingVerification={checkingVerification}
          completePayment={completePayment}
          createAndSendVerification={createAndSendVerification}
          email={email}
          handleAcceptToS={handleAcceptToS}
          importProducts={importProducts}
          importProductsCSV={importProductsCSV}
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
          tenant={tenant}
          tenantSubscription={tenantSubscription}
          handleSubmitProducts={handleSubmitProducts}
          previewProducts={previewProducts}
          setProducts={setProducts}
          currentTenantPlan={CURRENT_TENANT_PLAN}
          tenantMaxedPlan={tenantMaxedPlan}
        />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default ForTenants;
