"use client";

import { useState } from "react";
import {
  TenantCatalogItem,
  TenantProduct,
} from "@/context/TenantContext/types";
import {
  getPaginationMeta,
  paginateProducts,
  PRODUCTS_PER_PAGE,
} from "./utils/productImportsHelpers";
import {
  CsvPreviewProps,
  JsonPreviewProps,
  RawProductsProps,
  ReceivedCsvPreviewProps,
  ReceivedJsonPreviewProps,
  UseProductsImportsProps,
} from "./types";
import { selectedPlanMaxProducts } from "@/Interfaces/ForTenantsInterface/components/PlanIdInterface/utils";
import { CatalogState } from "@/Interfaces/TenantAreaInterface/types";

export const useProductsImport = ({
  selectedPlan,
  importProductsCSV,
  importProductsJSON,
  refresh,
  setTenantLoading,
}: UseProductsImportsProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [catalogStatus, setCatalogStatus] = useState<CatalogState>("idle");
  const [csvPreview, setCsvPreview] = useState<CsvPreviewProps>(null);
  const [jsonPreview, setJsonPreview] = useState<JsonPreviewProps>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [catalogItems, setCatalogItems] = useState<TenantCatalogItem[]>([]);
  const [catalogItemsJsonResponse, setCatalogItemsJsonResponse] =
    useState<ReceivedJsonPreviewProps | null>(null);
  const [catalogItemsCsvResponse, setCatalogItemsCsvResponse] =
    useState<ReceivedCsvPreviewProps | null>(null);
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

  const handleFileUpload = async (
    file: File,
    path: "onboard" | "admin/catalog",
  ) => {
    setLoading(true);
    setCatalogItemsJsonResponse(null);
    setCatalogItemsCsvResponse(null);
    setCatalogStatus("idle");

    setJsonPreview(null);
    setCsvPreview(null);

    setCatalogItems([]);
    setProducts([]);

    try {
      setErrors([]);
      setFileName(file.name);
      setFile(file);
      setCatalogStatus("loading");

      if (file.name.endsWith(".json") && importProductsJSON) {
        const jPreview = (await importProductsJSON(
          file,
          path,
          true,
        )) as ReceivedJsonPreviewProps;
        console.log("jPreview", jPreview);
        if (jPreview.products.length > MAX_PRODUCTS) {
          setErrors([`Plan allows only ${MAX_PRODUCTS} products`]);
          return;
        }

        const productsArray =
          jPreview.products as ReceivedJsonPreviewProps["products"];
        const catalogItemArray =
          jPreview.items as ReceivedJsonPreviewProps["items"];
        setCatalogItemsJsonResponse(jPreview);
        setCatalogItems(catalogItemArray);
        setProducts(productsArray);
        setJsonPreview(jPreview);
        if (jPreview.errorCount > 0) {
          setCatalogStatus("partial");
        } else if (jPreview.warningsCount > 0) {
          setCatalogStatus("warning");
        } else {
          setCatalogStatus("success");
        }
      }

      if (file.name.endsWith(".csv") && importProductsCSV) {
        const cPreview = (await importProductsCSV(
          file,
          path,
          true,
        )) as ReceivedCsvPreviewProps;
        if (cPreview.products.length > MAX_PRODUCTS) {
          setErrors([`Plan allows only ${MAX_PRODUCTS} products`]);
          return;
        }
        const productsArray =
          cPreview.products as ReceivedCsvPreviewProps["products"];
        const catalogItemArray =
          cPreview.items as ReceivedCsvPreviewProps["items"];
        setCatalogItemsCsvResponse(cPreview);
        setCatalogItems(catalogItemArray);
        setProducts(productsArray);
        setCsvPreview(cPreview);
        if (cPreview.errorCount > 0) {
          setCatalogStatus("partial");
        } else if (cPreview.warningsCount > 0) {
          setCatalogStatus("warning");
        } else {
          setCatalogStatus("success");
        }
      }
    } finally {
      refresh;
      setLoading(false);
    }
  };

  const handleCatalogSubmitProducts = async () => {
    if (!file) return;
    setLoading(true);
    setCatalogStatus("submitting");

    try {
      if (file.name.endsWith(".csv")) {
        const result = (await importProductsCSV(
          file,
          "admin/catalog",
          false,
        )) as {
          imported: number;
          products: TenantProduct[];
        };
        setProducts(result.products);
        setLoading(false);
        setCatalogStatus("success");

        console.log("Imported ✔", result);
        validateProducts();
        alert(`Imported ${result.imported} products`);
        clearImport();
        return;
      }
      if (file.name.endsWith(".json")) {
        const result = (await importProductsJSON(
          file,
          "admin/catalog",
          false,
        )) as {
          imported: number;
          products: TenantProduct[];
        };
        setProducts(result.products);
        setLoading(false);
        setCatalogStatus("success");

        console.log("Imported ✔", result);
        validateProducts();
        alert(`Imported ${result.imported} products`);
        clearImport();
        return;
      }
    } finally {
      setLoading(false);
      setTenantLoading(true);
      refresh();
    }

    console.log("Products validated ✔");
  };

  const clearImport = () => {
    setCatalogItems([]);
    setProducts([]);
    setCsvPreview(null);
    setJsonPreview(null);
    setFile(null);
    setFileName(null);
    setErrors([]);
    setIsValidated(false);
    setCatalogStatus("idle");
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
    handleCatalogSubmitProducts,
    validateProducts,
    updateProducts: setProducts,
    setCatalogItems,
    catalogItems,
    catalogItemsJsonResponse,
    catalogItemsCsvResponse,
    setPage,
    page,
    paginatedProducts,
    pagination,
    clearImport,
    loading,
    catalogStatus,
  };
};
