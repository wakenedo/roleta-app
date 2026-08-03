import axios from "axios";
import { useState } from "react";
import { TenantProduct } from "@/context/TenantContext/types";
import { VerifyCatalogResponse } from "./types";
import { API_URL } from "@/enums";

export const useCatalogVerification = (tenantId: string) => {
  const [loading, setLoading] = useState(false);
  const [verification, setVerification] =
    useState<VerifyCatalogResponse | null>(null);

  const verifyCatalog = async (products: TenantProduct[]) => {
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${API_URL}/tenants/${tenantId}/admin/catalog/verify`,
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
