"use client";

import { useState } from "react";
import { TenantProduct } from "@/context/TenantContext/types";
import {
  _handleFileUpload,
  _validateProducts,
  getPaginationMeta,
  paginateProducts,
  PRODUCTS_PER_PAGE,
} from "./utils/productImportsHelpers";
import {
  CsvPreviewProps,
  JsonPreviewProps,
  UseProductsImportsProps,
} from "./types";
import { selectedPlanMaxProducts } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/utils";

export const useProductsImport = ({
  selectedPlan,
  importProductsCSV,
  importProductsJSON,
}: UseProductsImportsProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [csvPreview, setCsvPreview] = useState<CsvPreviewProps>(null);
  const [jsonPreview, setJsonPreview] = useState<JsonPreviewProps>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(false);
  const [page, setPage] = useState(1);

  const MAX_PRODUCTS = selectedPlanMaxProducts(selectedPlan);

  const paginatedProducts = paginateProducts(products, page, PRODUCTS_PER_PAGE);

  const pagination = getPaginationMeta(
    products.length,
    PRODUCTS_PER_PAGE,
    page,
  );

  const validateProducts = _validateProducts({
    products,
    setErrors,
    setIsValidated,
  });

  const handleFileUpload = _handleFileUpload({
    file: file,
    importProductsCSV,
    importProductsJSON,
    maxProducts: MAX_PRODUCTS,
    setCsvPreview,
    setJsonPreview,
    setFile,
    setProducts,
    setFileName,
    setErrors,
  });

  return {
    file,
    fileName,
    jsonPreview,
    csvPreview,
    setJsonPreview,
    setCsvPreview,
    products,
    errors,
    isValidated,
    handleFileUpload,
    validateProducts,
    updateProducts: setProducts,
    setPage,
    page,
    paginatedProducts,
    pagination,
  };
};
