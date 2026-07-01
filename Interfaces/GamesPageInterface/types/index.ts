import { SpinQuota } from "@/context/UserContext/types";

interface GlobalGamePageProps {
  authorizedFetch: {
    (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    (
      input: string | URL | globalThis.Request,
      init?: RequestInit,
    ): Promise<Response>;
  };
  loading: boolean;
  optimisticSpin: (tenantId?: string | null) => void;
  refresh: ({ tenantId }: { tenantId: string | null }) => Promise<void>;
  quota: SpinQuota | null;
  globalQuotaLoading: boolean;
}

export type { GlobalGamePageProps };
