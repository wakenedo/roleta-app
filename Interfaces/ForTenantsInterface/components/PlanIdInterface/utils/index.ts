import { bannedWords } from "../enums/nameRules";

const selectedPlanMaxProducts = (selectedPlan: {
  id: string;
  name: string;
  price: string;
}) => {
  switch (selectedPlan.id) {
    case "tenant":
      return 100;
    case "tenantPro":
      return 200;
    case "tenantPremium":
      return 500;
    default:
      return 50;
  }
};
const MAX_LENGTH = 60;

const normalizeEmail = (value: string) => {
  return value.trim().toLowerCase();
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const normalize = (value: string) => {
  return value
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "");
};

const containsBannedWord = (value: string) => {
  const normalized = normalize(value);
  return bannedWords.some((word) => normalized.includes(word));
};

const sanitize = (value: string) => {
  return value
    .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, "") // remove special chars
    .replace(/\s+/g, " ") // collapse spaces
    .trimStart();
};

export {
  selectedPlanMaxProducts,
  MAX_LENGTH,
  normalizeEmail,
  isValidEmail,
  normalize,
  containsBannedWord,
  sanitize,
};
