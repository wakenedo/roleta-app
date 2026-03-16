import { TenantProduct } from "@/context/TenantContext/types";

/*
FIELD CANDIDATES
We attempt multiple possible field names for affiliate feeds
*/

const NAME_FIELDS = ["name", "title", "productName"];
const IMAGE_FIELDS = ["image", "image_url", "thumbnail", "picture"];
const URL_FIELDS = ["url", "link", "product_url", "affiliate_link"];
const PRICE_FIELDS = ["price", "amount", "value"];

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

export const normalizeProducts = (items: unknown[]): TenantProduct[] => {
  return items
    .filter(
      (p): p is Record<string, unknown> => typeof p === "object" && p !== null,
    )
    .map((p) => normalizeProduct(p));
};

export const paginateProducts = <T>(
  items: T[],
  page: number,
  perPage: number,
) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return items.slice(start, end);
};

export const getPaginationMeta = (
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
