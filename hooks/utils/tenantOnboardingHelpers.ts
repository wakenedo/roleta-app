import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { uploadTenantLogo } from "./brandingLogoHelpers";
import {
  CheckEmailVerificationProps,
  CompletePaymentProps,
  CreateAndSendVerificationProps,
  ImportProductsCSV,
  ImportProductsJson,
  ImportProductsProps,
  RegisterTenantProps,
  ResolveCompleteProps,
  SaveBrandingProps,
  SaveProductsProps,
} from "../types";

const _createAndSendVerification = async ({
  setVerificationSent,
  email,
  password,
}: CreateAndSendVerificationProps) => {
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

const _checkEmailVerification = async ({
  setIsEmailVerified,
  setCheckingVerification,
}: CheckEmailVerificationProps) => {
  if (!auth.currentUser) return;

  setCheckingVerification(true);

  await auth.currentUser.reload();
  await auth.currentUser.getIdToken(true);

  if (auth.currentUser.emailVerified) {
    setIsEmailVerified(true);
  }

  setCheckingVerification(false);
};

const _resendVerification = async () => {
  if (!auth.currentUser) return;

  await sendEmailVerification(auth.currentUser);
};

const _registerTenant = async ({
  name,
  isEmailVerified,
  planId,
  setTenantId,
  tenantRegister,
  setStep,
}: RegisterTenantProps) => {
  if (!isEmailVerified) {
    throw new Error("Email not verified");
  }

  if (!planId) throw new Error("Plan not selected");

  const res = await tenantRegister(name, planId);

  setTenantId(res.tenantId);
  setStep(res.onboardingStep); // payment
};

const _completePayment = async ({
  tenantFetch,
  tenantId,
  setStep,
}: CompletePaymentProps) => {
  await tenantFetch(`/tenants/onboard/payment/${tenantId}`, {
    method: "POST",
  });

  setStep("branding");
};

const _saveBranding = async ({
  branding,
  file,
  tenantFetch,
  tenantId,
  setLogoUrl,
  setStep,
}: SaveBrandingProps) => {
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

const _saveProducts = async ({
  products,
  tenantFetch,
  tenantId,
  setStep,
}: SaveProductsProps) => {
  await tenantFetch(`/tenants/onboard/products/${tenantId}`, {
    method: "POST",
    body: JSON.stringify({ products: [...products] }),
  });
  setStep("complete");
};

const _importProductsCSV = async ({
  file,
  dryRun = false,
  tenantId,
  tenantFetch,
}: ImportProductsCSV) => {
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

const _importProductsJSON = async ({
  file,
  dryRun = false,
  tenantId,
  tenantFetch,
}: ImportProductsJson) => {
  const text = await file.text();
  const json = JSON.parse(text);

  let products = null;

  if (Array.isArray(json)) {
    products = json;
  } else if (Array.isArray(json.products)) {
    products = json.products;
  } else if (Array.isArray(json.items)) {
    products = json.items;
  } else if (Array.isArray(json.data)) {
    products = json.data;
  } else if (Array.isArray(json.results)) {
    products = json.results;
  }

  if (!products) {
    throw new Error(
      "Could not find product array. Expected [], { products: [] }, { items: [] }",
    );
  }

  const res = await tenantFetch(
    `/tenants/${tenantId}/onboard/import${dryRun ? "?dryRun=true" : ""}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [...products],
      }),
    },
  );

  const data = await res.json();

  console.log("JSON import result:", data);

  return data;
};

const _resolveComplete = async ({
  tenantId,
  tenantFetch,
}: ResolveCompleteProps) => {
  await tenantFetch(`/tenants/onboard/complete/${tenantId}`, {
    method: "POST",
  });
};

const _importProducts = async ({
  products,
  tenantId,
  tenantFetch,
}: ImportProductsProps) => {
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

export {
  _createAndSendVerification,
  _checkEmailVerification,
  _resendVerification,
  _registerTenant,
  _completePayment,
  _saveBranding,
  _saveProducts,
  _importProducts,
  _importProductsCSV,
  _importProductsJSON,
  _resolveComplete,
};
