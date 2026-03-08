"use client";

import { useState } from "react";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { TenantBranding, TenantProduct } from "@/context/TenantContext/types";

export type TenantRegisterStep =
  | "register"
  | "payment"
  | "branding"
  | "products"
  | "completed";

export type StepHeaderProps = {
  stepNumber: number;
  stepText: string;
};

export const useTenantOnboarding = (planId?: string | null) => {
  const { tenantRegister, tenantFetch } = useTenantAuth();

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

  const registerTenant = async (
    name: string,
    email: string,
    password: string,
  ) => {
    const res = await tenantRegister(name, email, password, planId as string);

    setTenantId(res.tenantId);
    setStep(res.onboardingStep); // payment
  };

  const completePayment = async () => {
    await tenantFetch(`/tenants/onboard/payment/${tenantId}`, {
      method: "POST",
    });

    setStep("branding");
  };

  const saveBranding = async (branding: TenantBranding) => {
    await tenantFetch(`/tenants/onboard/branding/${tenantId}`, {
      method: "POST",
      body: JSON.stringify(branding),
    });

    setStep("products");
  };

  const saveProducts = async (products: TenantProduct[]) => {
    await tenantFetch(`/tenants/onboard/products/${tenantId}`, {
      method: "POST",
      body: JSON.stringify({ products }),
    });

    setStep("completed");
  };

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
    saveProducts,

    setName,
    setEmail,
    setPassword,
    setLogoUrl,
    setPrimaryColor,
    setStepHeader,
    setSelectedPlan,
  };
};
