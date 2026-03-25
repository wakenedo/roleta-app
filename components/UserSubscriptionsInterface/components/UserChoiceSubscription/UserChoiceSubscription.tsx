import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useUser } from "@/context/UserContext/UserContext";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const UserChoiceSubscription = () => {
  const { authorizedFetch } = useAuth();
  const { refresh } = useUser();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const upgrade = async (selectedPlan: string) => {
    if (!selectedPlan) return;

    try {
      setLoading(true);

      const res = await authorizedFetch(`${API_URL}/users/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
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
      <main className="flex flex-col  min-h-screen relative z-10">
        <span className="mt-4">Escolha seu Modelo de Usuário</span>
        <div className="flex space-x-6 mx-auto">
          <div className="flex flex-col items-center mt-20 gap-6 border space-y-6 py-4">
            <h2 className="text-3xl font-bold">Upgrade to Premium</h2>
            <p className="text-center max-w-md mx-2">
              Premium gives you the highest spin quota, larger history access
              and the best rewards in the platform.
            </p>
            {success ? (
              <div className="text-green-500 text-lg">
                🎉 Subscription activated!
              </div>
            ) : (
              <button
                onClick={() => upgrade("premium")}
                disabled={loading}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
              >
                {loading ? "Processing..." : "Upgrade to Premium"}
              </button>
            )}
          </div>
          <div className="flex flex-col items-center mt-20 gap-6 border space-y-6 py-4">
            <h2 className="text-3xl font-bold">Upgrade to Premium+</h2>
            <p className="text-center max-w-md mx-2">
              Premium gives you the highest spin quota, larger history access
              and the best rewards in the platform.
            </p>
            {success ? (
              <div className="text-green-500 text-lg">
                🎉 Subscription activated!
              </div>
            ) : (
              <button
                onClick={() => upgrade("premium+")}
                disabled={loading}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
              >
                {loading ? "Processing..." : "Upgrade to Premium+"}
              </button>
            )}
          </div>
        </div>
      </main>
    </AreaBackground>
  );
};
export default UserChoiceSubscription;
