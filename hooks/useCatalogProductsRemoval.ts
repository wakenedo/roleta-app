import { API_URL } from "@/enums";
import { CatalogProductsRemovalResult } from "@/Interfaces/TenantAreaInterface/types";
import axios from "axios";
import { useState } from "react";

export const useCatalogProductsRemoval = (tenantId: string) => {
  const [loading, setLoading] = useState(false);

  const [removalResult, setRemovalResult] =
    useState<CatalogProductsRemovalResult | null>(null);

  const removeItemsFromCatalog = async (productIds: string[]) => {
    setLoading(true);

    try {
      const { data } = await axios.delete<CatalogProductsRemovalResult>(
        `${API_URL}/tenants/${tenantId}/admin/catalog/products`,
        {
          data: {
            productIds,
          },
        },
      );

      setRemovalResult(data);

      return data;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    removalResult,
    removeItemsFromCatalog,
  };
};
