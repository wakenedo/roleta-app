"use client";

import { useEffect, useState } from "react";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { TenantRegisterStep } from "@/context/TenantContext/types";
import { StepHeaderProps } from "./types";
import {
  _checkEmailVerification,
  _completePayment,
  _createAndSendVerification,
  _importProducts,
  _importProductsCSV,
  _importProductsJSON,
  _registerTenant,
  _resendVerification,
  _resolveComplete,
  _saveBranding,
  _saveProducts,
} from "./utils/tenantOnboardingHelpers";

export const useTenantOnboarding = (planId?: string | null) => {
  const { tenantRegister, tenantFetch, tenantMe } = useTenantAuth();
  const [verificationSent, setVerificationSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [checkingVerification, setCheckingVerification] = useState(false);
  const [tenantId, setTenantId] = useState<string>("");
  const [step, setStep] = useState<TenantRegisterStep>("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#6B46C1");
  const [password, setPassword] = useState("");
  const [stepHeader, setStepHeader] = useState<StepHeaderProps>({
    stepNumber: 1,
    stepText: "Dados inicias para o registro do parceiro",
  });
  const [selectedPlan, setSelectedPlan] = useState({
    id: "",
    name: "",
    price: "",
  });

  const createAndSendVerification = _createAndSendVerification({
    setVerificationSent,
    email,
    password,
  });

  const checkEmailVerification = _checkEmailVerification({
    setIsEmailVerified,
    setCheckingVerification,
  });

  const resendVerification = _resendVerification;

  const registerTenant = _registerTenant({
    name,
    isEmailVerified,
    planId,
    setTenantId,
    tenantRegister,
    setStep,
  });

  const completePayment = _completePayment({
    tenantFetch,
    tenantId,
    setStep,
  });

  const saveBranding = _saveBranding({
    branding: { logoUrl, primaryColor },
    tenantFetch,
    tenantId,
    setLogoUrl,
    setStep,
  });

  const importProductsCSV = _importProductsCSV({
    file: new File([], ""),
    tenantFetch,
    tenantId,
  });

  const importProductsJSON = _importProductsJSON({
    file: new File([], ""),
    tenantFetch,
    tenantId,
  });

  const saveProducts = _saveProducts({
    products: [],
    tenantFetch,
    tenantId,
    setStep,
  });

  const resolveComplete = _resolveComplete({
    tenantFetch,
    tenantId,
  });

  const importProducts = _importProducts({
    tenantFetch,
    tenantId,
    products: [],
  });

  const syncTenantState = async () => {
    const me = await tenantMe();

    if (!me) return;

    setTenantId(me.tenantId);
    setStep(me.onboardingStep);
  };

  useEffect(() => {
    syncTenantState();
  }, []);

  return {
    step,
    name,
    email,
    password,
    logoUrl,
    primaryColor,
    stepHeader,
    selectedPlan,
    tenantId,

    registerTenant,
    completePayment,
    saveBranding,
    importProducts,
    importProductsCSV,
    importProductsJSON,
    saveProducts,
    resolveComplete,

    createAndSendVerification,
    checkEmailVerification,
    resendVerification,
    verificationSent,
    isEmailVerified,
    checkingVerification,

    setName,
    setEmail,
    setPassword,
    setLogoUrl,
    setPrimaryColor,
    setStepHeader,
    setSelectedPlan,
  };
};
