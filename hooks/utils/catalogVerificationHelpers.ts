import { VerifyCatalogResponse } from "../types";

const getProductVerificationResult = (
  productId: string,
  verification?: VerifyCatalogResponse,
) => verification?.results.find((result) => result.product.id === productId);

export { getProductVerificationResult };
