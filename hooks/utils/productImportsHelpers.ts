import { TenantProduct } from "@/context/TenantContext/types";
import { SetStateAction } from "react";
import { CsvPreviewProps, JsonPreviewProps } from "../types";

/*
FIELD CANDIDATES
We attempt multiple possible field names for affiliate feeds
*/

const NAME_FIELDS = ["name", "title", "productName"];
const IMAGE_FIELDS = ["image", "image_url", "thumbnail", "picture"];
const URL_FIELDS = ["url", "link", "product_url", "affiliate_link"];
const PRICE_FIELDS = ["price", "amount", "value"];
const PRODUCTS_PER_PAGE = 20;

/*
Utility: find first existing field
*/

const pickField = (obj: Record<string, unknown>, fields: string[]) => {
  for (const field of fields) {
    if (obj[field] !== undefined && obj[field] !== null) {
      return obj[field];
    }
  }
  return undefined;
};

/*
Extract price from any structure
*/

const extractPrice = (
  price: number | string | { [key: string]: unknown } | null | undefined,
): number | null => {
  if (!price) return null;

  if (typeof price === "number") return price;

  if (typeof price === "string") {
    const parsed = Number(price.replace(",", "."));
    return isNaN(parsed) ? null : parsed;
  }

  if (typeof price === "object") {
    if (typeof price.value === "number") return price.value;
    if (typeof price.amount === "number") return price.amount;
    if (typeof price.price === "number") return price.price;
    if (
      price.installment &&
      typeof price.installment === "object" &&
      "value" in price.installment &&
      typeof (price.installment as { value?: unknown }).value === "number"
    ) {
      return (price.installment as { value: number }).value;
    }
  }

  return null;
};

/*
Normalize any affiliate product
*/

const normalizeProduct = (p: Record<string, unknown>): TenantProduct => {
  const name =
    typeof pickField(p, NAME_FIELDS) === "string"
      ? (pickField(p, NAME_FIELDS) as string)
      : "";
  const image =
    typeof pickField(p, IMAGE_FIELDS) === "string"
      ? (pickField(p, IMAGE_FIELDS) as string)
      : "";
  const url =
    typeof pickField(p, URL_FIELDS) === "string"
      ? (pickField(p, URL_FIELDS) as string)
      : "";

  const rawPrice = pickField(p, PRICE_FIELDS) ?? p.price ?? p.pricing ?? null;

  // Filter out empty objects before passing to extractPrice
  const validRawPrice =
    typeof rawPrice === "object" &&
    rawPrice !== null &&
    Object.keys(rawPrice).length === 0
      ? null
      : (rawPrice as
          | string
          | number
          | { [key: string]: unknown }
          | null
          | undefined);

  return {
    id: String(p.id ?? crypto.randomUUID()),
    name,
    image,
    url,
    offerUrl: url,
    tier:
      typeof p.tier === "string" &&
      ["common", "rare", "jackpot"].includes(p.tier)
        ? (p.tier as "common" | "rare" | "jackpot")
        : "common",
    price: extractPrice(validRawPrice),
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

/*
Normalize feed
*/

const normalizeProducts = (items: unknown[]): TenantProduct[] => {
  return items
    .filter(
      (p): p is Record<string, unknown> => typeof p === "object" && p !== null,
    )
    .map((p) => normalizeProduct(p));
};

const paginateProducts = <T>(items: T[], page: number, perPage: number) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return items.slice(start, end);
};

const getPaginationMeta = (
  totalItems: number,
  perPage: number,
  currentPage: number,
) => {
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    totalItems,
    perPage,
    currentPage,
    totalPages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
};

const _validateProducts = ({
  products,
  setErrors,
  setIsValidated,
}: {
  products: TenantProduct[];
  setErrors: (value: SetStateAction<string[]>) => void;
  setIsValidated: (value: SetStateAction<boolean>) => void;
}) => {
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

const _handleFileUpload = async ({
  file,
  setErrors,
  setFileName,
  setFile,
  setJsonPreview,
  setCsvPreview,
  setProducts,
  importProductsJSON,
  importProductsCSV,
  maxProducts,
}: {
  file: File | null;
  setErrors: (value: SetStateAction<string[]>) => void;
  setFileName: (value: SetStateAction<string | null>) => void;
  setFile: (value: SetStateAction<File | null>) => void;
  setProducts: (value: SetStateAction<TenantProduct[]>) => void;
  setJsonPreview: (value: SetStateAction<JsonPreviewProps>) => void;
  setCsvPreview: (value: SetStateAction<CsvPreviewProps>) => void;
  importProductsJSON:
    | ((file: File, dryRun?: boolean) => Promise<unknown>)
    | undefined;
  importProductsCSV:
    | ((file: File, dryRun?: boolean) => Promise<unknown>)
    | undefined;
  maxProducts: 100 | 200 | 500 | 50;
}) => {
  if (!file) return;
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
    if (jPreview.products.length > maxProducts) {
      setErrors([`Plan allows only ${maxProducts} products`]);
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

export {
  getPaginationMeta,
  paginateProducts,
  normalizeProducts,
  PRODUCTS_PER_PAGE,
  _validateProducts,
  _handleFileUpload,
};
