import { VerificationResult } from "@/hooks/types";

const getInvalidProductIds = (
  verificationByProductId: Map<string, VerificationResult>,
) => {
  return Array.from(verificationByProductId.values())
    .filter((result) => !result.valid)
    .map((result) => result.product.id);
};
export { getInvalidProductIds };
