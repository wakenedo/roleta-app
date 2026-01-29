"use client";

import { useEffect, useState } from "react";
import { SlotsGameProps } from "../types";
import ProductSlotsReels from "./components/ProductSlotsReels/ProductSlotsReels";
import { useAuth } from "@/context/AuthContext/AuthContext";

type Quota = {
  used: number;
  remaining: number;
  limit: number;
};

const SlotsGame: React.FC<SlotsGameProps> = ({ spinning, spin }) => {
  const { user, authorizedFetch } = useAuth();

  const [quota, setQuota] = useState<Quota | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const renderDeployAddress = process.env.NEXT_PUBLIC_LOCAL_API;

  /* ------------------------------------------------------------
   * Fetch quota on login / mount
   * ------------------------------------------------------------ */
  useEffect(() => {
    if (!user) {
      setQuota(null);
      return;
    }

    let cancelled = false;

    const fetchQuota = async () => {
      try {
        const res = await authorizedFetch(`${renderDeployAddress}/spin/quota`);

        if (!res.ok) return;

        const data = await res.json();
        if (!cancelled) setQuota(data.quota);
      } catch {}
    };

    fetchQuota();
    return () => {
      cancelled = true;
    };
  }, [user, authorizedFetch]);

  /* ------------------------------------------------------------
   * Spin handler
   * ------------------------------------------------------------ */
  const handleSpin = async () => {
    if (!user || spinning || loading) return;
    if (quota && quota.remaining <= 0) return;

    try {
      setLoading(true);
      setError(null);

      const res = await authorizedFetch(`${renderDeployAddress}/spin`, {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 403) {
          setQuota(data.quota ?? quota);
          setError("Limite diário atingido");
        } else if (res.status === 401) {
          setError("Sessão expirada. Faça login novamente.");
        } else {
          setError("Erro ao girar");
        }
        return;
      }

      // 🔑 Backend is the authority
      setQuota(data.quota);

      // Trigger reels animation
      spin();
    } catch {
      setError("Erro de conexão");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------------------------------------------
   * Render
   * ------------------------------------------------------------ */
  const remaining = quota?.remaining;

  console.log("Quota:", quota?.remaining);

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <ProductSlotsReels />

      <p className="mb-2 text-sm text-slate-900">
        {quota !== undefined ? `Rodadas restantes hoje: ${remaining}` : "—"}
      </p>

      {error && <p className="mb-2 text-xs text-red-500">{error}</p>}

      <button
        onClick={handleSpin}
        disabled={
          !user ||
          spinning ||
          loading ||
          (remaining !== undefined && remaining <= 0)
        }
        className="px-6 py-2 bg-green-400 text-slate-50 rounded-xs disabled:bg-slate-400 mb-2"
      >
        {!user
          ? "Faça login para girar"
          : loading || spinning
            ? "Girando..."
            : remaining !== undefined && remaining <= 0
              ? "Limite diário atingido"
              : "Girar"}
      </button>
    </div>
  );
};

export default SlotsGame;
