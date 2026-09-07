import { AreaBackground } from "@/backgrounds/AreaBackground";

const UserChoiceSubscription = ({
  upgradeUserSubscription,
  successUpgradeUserSub,
  loadingUpgradeUserSub,
}: {
  loadingUpgradeUserSub: boolean;
  successUpgradeUserSub: boolean;
  upgradeUserSubscription: (selectedPlan: string) => Promise<void>;
}) => {
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
            {successUpgradeUserSub ? (
              <div className="text-green-500 text-lg">
                🎉 Subscription activated!
              </div>
            ) : (
              <button
                onClick={() => upgradeUserSubscription("premium")}
                disabled={loadingUpgradeUserSub}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
              >
                {loadingUpgradeUserSub ? "Processing..." : "Upgrade to Premium"}
              </button>
            )}
          </div>
          <div className="flex flex-col items-center mt-20 gap-6 border space-y-6 py-4">
            <h2 className="text-3xl font-bold">Upgrade to Premium+</h2>
            <p className="text-center max-w-md mx-2">
              Premium gives you the highest spin quota, larger history access
              and the best rewards in the platform.
            </p>
            {successUpgradeUserSub ? (
              <div className="text-green-500 text-lg">
                🎉 Subscription activated!
              </div>
            ) : (
              <button
                onClick={() => upgradeUserSubscription("premium+")}
                disabled={loadingUpgradeUserSub}
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
              >
                {loadingUpgradeUserSub
                  ? "Processing..."
                  : "Upgrade to Premium+"}
              </button>
            )}
          </div>
        </div>
      </main>
    </AreaBackground>
  );
};
export default UserChoiceSubscription;
