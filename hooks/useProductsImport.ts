"use client";

import { useState } from "react";
import { TenantProduct } from "@/context/TenantContext/types";
import {
  getPaginationMeta,
  normalizeProducts,
  paginateProducts,
} from "./utils/productImportsHelpers";
import { RawProductsProps } from "./types";
import { selectedPlanMaxProducts } from "@/components/ForTenantsInterface/components/PlanIdInterface/utils";

export const useProductsImport = (selectedPlan: {
  id: string;
  name: string;
  price: string;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [rawProducts, setRawProducts] = useState<RawProductsProps[]>([]);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(false);
  const [page, setPage] = useState(1);

  const MAX_PRODUCTS = selectedPlanMaxProducts(selectedPlan);
  const PRODUCTS_PER_PAGE = 25;

  const paginatedProducts = paginateProducts(products, page, PRODUCTS_PER_PAGE);

  const pagination = getPaginationMeta(
    products.length,
    PRODUCTS_PER_PAGE,
    page,
  );

  const parseJSON = async (file: File) => {
    try {
      const text = await file.text();
      const json = JSON.parse(text);

      let productsArray: RawProductsProps[] | null = null;

      if (Array.isArray(json)) {
        productsArray = json;
      } else if (Array.isArray(json.products)) {
        productsArray = json.products;
      } else if (Array.isArray(json.items)) {
        productsArray = json.items;
      } else if (Array.isArray(json.data)) {
        productsArray = json.data;
      } else if (Array.isArray(json.results)) {
        productsArray = json.results;
      }

      if (!productsArray) {
        setErrors([
          "Could not find product array. Expected: [], { products: [] }, { items: [] }",
        ]);
        return;
      }

      if (productsArray.length > MAX_PRODUCTS) {
        setErrors([`Plan allows only ${MAX_PRODUCTS} products`]);
        return;
      }

      setRawProducts(productsArray);

      const normalized = normalizeProducts(productsArray);

      setProducts(normalized);
    } catch {
      setErrors(["Invalid JSON format"]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setErrors([]);
    setFileName(file.name);

    if (file.name.endsWith(".json")) {
      await parseJSON(file);
    }
  };

  const validateProducts = () => {
    const newErrors: string[] = [];

    products.forEach((p, index) => {
      if (!p.name) newErrors.push(`Product ${index + 1} missing name`);
      if (!p.image) newErrors.push(`Product ${index + 1} missing image`);
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

  return {
    fileName,
    rawProducts,
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
