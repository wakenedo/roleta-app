"use client";

import { useState } from "react";
import { TenantProduct } from "@/context/TenantContext/types";
import {
  getPaginationMeta,
  paginateProducts,
  PRODUCTS_PER_PAGE,
} from "./utils/productImportsHelpers";
import {
  CsvPreviewProps,
  JsonPreviewProps,
  RawProductsProps,
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

  const rawProducts = <RawProductsProps>[];
  const MAX_PRODUCTS = selectedPlanMaxProducts(selectedPlan);

  const paginatedProducts = paginateProducts(products, page, PRODUCTS_PER_PAGE);

  const pagination = getPaginationMeta(
    products.length,
    PRODUCTS_PER_PAGE,
    page,
  );

  const validateProducts = () => {
    const newErrors: string[] = [];
    products.forEach((p, index) => {
      if (!p.name) newErrors.push(`Product ${index + 1} missing name`);
      if (!p.url) newErrors.push(`Product ${index + 1} missing url`);
      if (p.price !== null && p.price != undefined && p.price < 0)
        newErrors.push(`Product ${index + 1} invalid price`);
    });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setIsValidated(false);
      return false;
    }

    setIsValidated(true);
    return true;
  };

  const handleFileUpload = async (file: File) => {
    setErrors([]);
    setFileName(file.name);
    setFile(file);

    if (file.name.endsWith(".json") && importProductsJSON) {
      const jPreview = (await importProductsJSON(file, true)) as {
        total: number;
        valid: number;
        preview: unknown[];
        products: unknown[];
        errors: string[];
      };
      if (jPreview.products.length > MAX_PRODUCTS) {
        setErrors([`Plan allows only ${MAX_PRODUCTS} products`]);
        return;
      }
      const productsArray = jPreview.products as TenantProduct[];

      setProducts(productsArray);
      setJsonPreview(jPreview);
    }
    if (file.name.endsWith(".csv") && importProductsCSV) {
      const cPreview = (await importProductsCSV(file, true)) as {
        preview: unknown[];
        errors: string[];
        total: number;
        valid: number;
      };
      setCsvPreview(cPreview);
    }
  };

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
    rawProducts,
    handleFileUpload,
    validateProducts,
    updateProducts: setProducts,
    setPage,
    page,
    paginatedProducts,
    pagination,
  };
};
