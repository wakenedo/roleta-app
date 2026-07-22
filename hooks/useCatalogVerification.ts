import { useState } from "react";
import axios from "axios";

import { TenantProduct } from "@/context/TenantContext/types";

interface VerifyCatalogResponse {
  total: number;
  validCount: number;
  invalidCount: number;
  results: unknown[];
}

export const useCatalogVerification = (tenantId: string) => {
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] =
    useState<VerifyCatalogResponse | null>(null);

  const verifyCatalog = async (products: TenantProduct[]) => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        `/api/tenants/${tenantId}/admin/catalog/verify`,
        {
          products,
        },
      );

      setVerification(data);

      return data;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    verification,
    verifyCatalog,
  };
};
