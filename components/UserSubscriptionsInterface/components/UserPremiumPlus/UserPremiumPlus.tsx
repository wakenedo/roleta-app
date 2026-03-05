"use client";

import { useState } from "react";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const UserPremiumPlus = ({ planId }: { planId: string | null }) => {
  const { authorizedFetch } = useAuth();
  const { refresh } = useUser();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upgrade = async () => {
    if (!planId) return;

    try {
      setLoading(true);

      const res = await authorizedFetch(`${API_URL}/users/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: planId,
        }),
      });

      if (!res.ok) {
        throw new Error("Subscription failed");
      }

      await refresh();
      setSuccess(true);
    } catch (err) {
      console.error("Upgrade failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AreaBackground>
      <main className="flex flex-col justify-between min-h-screen relative z-10">
        <div className="flex flex-col items-center mt-20 gap-6">
          <h2 className="text-3xl font-bold">Upgrade to {planId}</h2>

          <p className="text-center max-w-md">
            Premium+ gives you the highest spin quota, larger history access and
            the best rewards in the platform.
          </p>

          {success ? (
            <div className="text-green-500 text-lg">
              🎉 Subscription activated!
            </div>
          ) : (
            <button
              onClick={upgrade}
              disabled={loading}
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
            >
              {loading ? "Processing..." : "Upgrade to Premium+"}
            </button>
          )}
        </div>
      </main>
    </AreaBackground>
  );
};

export default UserPremiumPlus;
