import {
  Tenant,
  TenantBranding,
  TenantProduct,
  TenantRegisterStep,
} from "@/context/TenantContext/types";
import { StepHeaderProps } from "@/hooks/types";
import { Dispatch, SetStateAction } from "react";

type PlanIdInterfaceProps = {
  planId: string;
  step: TenantRegisterStep;
  name: string;
  email: string;
  password: string;
  logoUrl: string;
  primaryColor: string;
  stepHeader: StepHeaderProps;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };

  registerTenant: (name: string) => Promise<void>;
  completePayment: () => Promise<void>;
  saveBranding: (branding: TenantBranding, file?: File) => Promise<void>;
  saveProducts: (products: TenantProduct[]) => Promise<void>;
  resolveComplete: () => Promise<void>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setLogoUrl: Dispatch<SetStateAction<string>>;
  setPrimaryColor: Dispatch<SetStateAction<string>>;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  setSelectedPlan: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
      price: string;
    }>
  >;
  importProducts: (products: TenantProduct[]) => Promise<void>;
  importProductsCSV: (file: File, dryRun?: boolean) => Promise<unknown>;
  importProductsJSON: (file: File, dryRun?: boolean) => Promise<unknown>;
  checkEmailVerification: () => Promise<void>;
  createAndSendVerification: () => Promise<void>;
  checkingVerification: boolean;
  isEmailVerified: boolean;

  validations: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    symbol: boolean;
  };
  isPasswordValid: boolean;
  productsImported: ProductsImportedProps;
  pickProducts: TenantProduct[];
  handleAcceptToS: () => void;
  passwordsMatch: boolean;
  loading: boolean;
  error: string | null;
  showToS: boolean;
  acceptedToS: boolean;

  showPassword: boolean;
  confirmPassword: string;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  setShowToS: Dispatch<SetStateAction<boolean>>;
  products: TenantProduct[];
  setProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  handleSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
};
type ForTenantsInterfaceProps = {
  planId: string | null;
  tenant?: Tenant | null;
  step: TenantRegisterStep;
  tenantSubscription: string | undefined;
  name: string;
  email: string;
  password: string;
  logoUrl: string;
  primaryColor: string;
  stepHeader: StepHeaderProps;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };

  registerTenant: (name: string) => Promise<void>;
  completePayment: () => Promise<void>;
  saveBranding: (branding: TenantBranding, file?: File) => Promise<void>;
  saveProducts: (products: TenantProduct[]) => Promise<void>;
  resolveComplete: () => Promise<void>;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setLogoUrl: Dispatch<SetStateAction<string>>;
  setPrimaryColor: Dispatch<SetStateAction<string>>;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  setSelectedPlan: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
      price: string;
    }>
  >;
  importProducts: (products: TenantProduct[]) => Promise<void>;
  importProductsCSV: (file: File, dryRun?: boolean) => Promise<unknown>;
  importProductsJSON: (file: File, dryRun?: boolean) => Promise<unknown>;
  checkEmailVerification: () => Promise<void>;
  createAndSendVerification: () => Promise<void>;
  checkingVerification: boolean;
  isEmailVerified: boolean;

  validations: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    symbol: boolean;
  };
  isPasswordValid: boolean;
  productsImported: ProductsImportedProps;
  pickProducts: TenantProduct[];
  handleAcceptToS: () => void;
  passwordsMatch: boolean;
  loading: boolean;
  error: string | null;
  showToS: boolean;
  acceptedToS: boolean;

  showPassword: boolean;
  confirmPassword: string;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  setShowToS: Dispatch<SetStateAction<boolean>>;
  products: TenantProduct[];
  setProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  handleSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
  currentTenantPlan: string | undefined;
  tenantMaxedPlan: boolean;
};

type RegisterStepProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  registerTenant: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
  checkEmailVerification: () => Promise<void>;
  createAndSendVerification: () => Promise<void>;
  checkingVerification: boolean;
  isEmailVerified: boolean;
  showToS: boolean;
  setShowToS: Dispatch<SetStateAction<boolean>>;
  acceptedToS: boolean;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  passwordsMatch: boolean;
  validations: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    symbol: boolean;
  };
  isPasswordValid: boolean;
  handleAcceptToS: () => void;
};

type CompleteStepProps = {
  name: string;
  email: string;
  logoUrl: string;
  primaryColor: string;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  products: TenantProduct[];
  loading: boolean;
  error: string | null;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  resolveComplete: () => Promise<void>;
};

type BrandingStepProps = {
  name: string;
  email: string;
  logoUrl: string;
  primaryColor: string;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  onSave: (branding: TenantBranding, file?: File) => Promise<void>;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  setLogoUrl: Dispatch<SetStateAction<string>>;
  setPrimaryColor: Dispatch<SetStateAction<string>>;
};

type PaymentStepProps = {
  planId: string;
  name: string;
  email: string;
  onPay: () => void;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  setSelectedPlan: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
      price: string;
    }>
  >;
};

type ProductsStepProps = {
  name: string;
  email: string;
  logoUrl: string;
  primaryColor: string;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  onSave: (products: TenantProduct[]) => void;
  setStepHeader: Dispatch<SetStateAction<StepHeaderProps>>;
  importProducts: (products: TenantProduct[]) => Promise<void>;
  importProductsCSV: (file: File, dryRun?: boolean) => Promise<unknown>;
  importProductsJSON: (file: File, dryRun?: boolean) => Promise<unknown>;
  productsImported: ProductsImportedProps;
  pickProducts: TenantProduct[];
  setProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  products: TenantProduct[];
  handleSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
};

type ProductsImportedProps = {
  file: File | null;
  csvPreview: {
    preview: unknown[];
    errors: string[];
    total: number;
    valid: number;
  } | null;
  setCsvPreview: Dispatch<
    SetStateAction<{
      preview: unknown[];
      errors: string[];
      total: number;
      valid: number;
    } | null>
  >;
  fileName: string | null;
  rawProducts: [][];
  products: TenantProduct[];
  errors: string[];
  isValidated: boolean;
  handleFileUpload: (file: File) => Promise<void>;
  validateProducts: () => boolean;
  updateProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  paginatedProducts: TenantProduct[];
  page: number;
  pagination: {
    totalItems: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};

type AddProductsContentProps = {
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  productsImported: ProductsImportedProps;
  importProducts: (products: TenantProduct[]) => Promise<void>;
  importProductsCSV: (file: File, dryRun?: boolean) => Promise<unknown>;
  importProductsJSON: (file: File, dryRun?: boolean) => Promise<unknown>;
  setProducts: Dispatch<SetStateAction<TenantProduct[]>>;
  products: TenantProduct[];
  handleSubmitProducts: () => Promise<void>;
  previewProducts: TenantProduct[];
};

type CompleteProductsStepButtonProps = {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
  areProductsValidated: boolean;
};

type SaveProductsButtonProps = {
  onClick: () => void;
  label: string;
};

type HandleFileUploadInputProps = {
  handleFileUpload: (file: File) => Promise<void>;
  fileName: string | null;
  errors: string[];
};

type ProductImportPreviewTableProps = {
  products: TenantProduct[];
  paginatedProducts: TenantProduct[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  updateProducts: (products: TenantProduct[]) => void;
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  pagination: {
    totalItems: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};

type ProductImportRowProps = {
  product: TenantProduct;
  index: number;
  updateProductField: (
    index: number,
    field: keyof TenantProduct,
    value: TenantProduct[keyof TenantProduct],
  ) => void;
};

type TenantEmailInputProps = {
  email: string;
  setEmail: (value: SetStateAction<string>) => void;

  onSendVerification: () => Promise<void>;
  onCheckVerification: () => Promise<boolean | void>;

  isVerified: boolean;
  loading: boolean;
};

export type {
  PlanIdInterfaceProps,
  RegisterStepProps,
  CompleteStepProps,
  BrandingStepProps,
  PaymentStepProps,
  ProductsStepProps,
  AddProductsContentProps,
  CompleteProductsStepButtonProps,
  SaveProductsButtonProps,
  HandleFileUploadInputProps,
  ProductImportPreviewTableProps,
  ProductImportRowProps,
  TenantEmailInputProps,
  ForTenantsInterfaceProps,
};
