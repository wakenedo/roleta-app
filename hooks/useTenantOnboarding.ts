"use client";

import { useEffect, useState } from "react";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import {
  TenantBranding,
  TenantProduct,
  TenantRegisterStep,
} from "@/context/TenantContext/types";
import { StepHeaderProps } from "./types";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase"; // adjust path
import { uploadTenantLogo } from "./utils/brandingLogoHelpers";

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

  const createAndSendVerification = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await sendEmailVerification(userCred.user);

      setVerificationSent(true);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const checkEmailVerification = async () => {
    if (!auth.currentUser) return;

    setCheckingVerification(true);

    await auth.currentUser.reload();
    await auth.currentUser.getIdToken(true);

    if (auth.currentUser.emailVerified) {
      setIsEmailVerified(true);
    }

    setCheckingVerification(false);
  };

  const resendVerification = async () => {
    if (!auth.currentUser) return;

    await sendEmailVerification(auth.currentUser);
  };

  const registerTenant = async (name: string) => {
    if (!isEmailVerified) {
      throw new Error("Email not verified");
    }

    if (!planId) throw new Error("Plan not selected");

    const res = await tenantRegister(name, planId);

    setTenantId(res.tenantId);
    setStep(res.onboardingStep); // payment
  };

  const completePayment = async () => {
    await tenantFetch(`/tenants/onboard/payment/${tenantId}`, {
      method: "POST",
    });

    setStep("branding");
  };

  const saveBranding = async (branding: TenantBranding, file?: File) => {
    let logoUrl = branding.logoUrl;

    if (file) {
      logoUrl = await uploadTenantLogo(file, tenantId);
      setLogoUrl(logoUrl);
    }
    await tenantFetch(`/tenants/onboard/branding/${tenantId}`, {
      method: "POST",
      body: JSON.stringify({ ...branding, logoUrl }),
    });

    setStep("products");
  };

  const importProducts = async (products: TenantProduct[]) => {
    const res = await tenantFetch(`/tenants/${tenantId}/onboard/import`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [...products],
      }),
    });

    const data = await res.json();

    console.log("Import result:", data);
  };

  const importProductsCSV = async (file: File, dryRun = false) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await tenantFetch(
      `/tenants/${tenantId}/onboard/import/csv${dryRun ? "?dryRun=true" : ""}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    console.log("CSV import result:", data);

    return data;
  };

  const saveProducts = async (products: TenantProduct[]) => {
    await tenantFetch(`/tenants/onboard/products/${tenantId}`, {
      method: "POST",
      body: JSON.stringify({ products: [...products] }),
    });

    setStep("complete");
  };

  const resolveComplete = async () => {
    await tenantFetch(`/tenants/onboard/complete/${tenantId}`, {
      method: "POST",
    });
  };

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
