import { TenantBranding, TenantProduct } from "@/context/TenantContext/types";
import { StepHeaderProps } from "@/hooks/types";
import { Dispatch, SetStateAction } from "react";

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
  onSave: (branding: TenantBranding) => void;
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
};

type AddProductsContentProps = {
  selectedPlan: {
    id: string;
    name: string;
    price: string;
  };
  productsImport: {
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
  importProducts: (products: TenantProduct[]) => Promise<void>;
};

type CompleteProductsStepButtonProps = {
  products: TenantProduct[];
  onSave: (products: TenantProduct[]) => void;
  areProductsValidated: boolean;
};

type SaveProductsButtonProps = {
  onClick: () => void;
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

export type {
  CompleteStepProps,
  BrandingStepProps,
  PaymentStepProps,
  ProductsStepProps,
  AddProductsContentProps,
  CompleteProductsStepButtonProps,
  SaveProductsButtonProps,
  HandleFileUploadInputProps,
  ProductImportPreviewTableProps,
};
