"use client";

import { useState } from "react";
import { TenantProduct } from "@/context/TenantContext/types";

const MAX_PRODUCTS = 50;

export const useProductsImport = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [rawProducts, setRawProducts] = useState<TenantProduct[]>([]);
  const [products, setProducts] = useState<TenantProduct[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isValidated, setIsValidated] = useState(false);

  const parseJSON = async (file: File) => {
    try {
      const text = await file.text();
      console.log("JSON TEXT:", text);

      const json = JSON.parse(text);
      console.log("PARSED JSON:", json);

      let productsArray: TenantProduct[] | null = null;

      // case 1: array root
      if (Array.isArray(json)) {
        productsArray = json;
      }

      // case 2: wrapped object
      else if (json.products && Array.isArray(json.products)) {
        productsArray = json.products;
      } else if (json.items && Array.isArray(json.items)) {
        productsArray = json.items;
      } else if (json.data && Array.isArray(json.data)) {
        productsArray = json.data;
      } else if (json.results && Array.isArray(json.results)) {
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
      normalizeProducts(productsArray);
    } catch {
      setErrors(["Invalid JSON format"]);
    }
  };

  const normalizeProducts = (items: TenantProduct[]) => {
    const normalized: TenantProduct[] = items.map((p) => ({
      id: p.id ?? "",
      name: p.name ?? "",
      image: p.image ?? "",
      url: p.url ?? "",
      tier: p.tier ?? "normal",
      price: p.price ?? null,
      active: p.active ?? true,
      createdAt: p.createdAt
        ? new Date(p.createdAt).toISOString()
        : new Date().toISOString(),
      updatedAt: p.updatedAt
        ? new Date(p.updatedAt).toISOString()
        : new Date().toISOString(),
    }));

    setProducts(normalized);
  };

  const handleFileUpload = async (file: File) => {
    console.log("UseProductsImport handleFileUpload file", file);
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
  };
};
