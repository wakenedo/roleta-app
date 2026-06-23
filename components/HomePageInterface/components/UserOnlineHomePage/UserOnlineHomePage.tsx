import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AreaBackground } from "../UserOfflineHomePage/components/AreaBackground";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";
import { motion } from "framer-motion";
import { UserOnlineHomePageProps } from "../../types";
const UserOnlineHomePage = ({
  tenant,
  userMaxedPlan,
  tenantMaxedPlan,
  currentTenantPlan,
  currentUserPlan,
  containerRef,
  mounted,
  confetti,
  coins,
  tenantsLoading,
  featuredTenant,
  popularTenants,
  search,
  setSearch,
  tenantsError,
  handleUserSubscribe,
  selectedPopularTenant,
  setSelectedPopularTenant,
  filtered,
  primaryColor,
  handleSelectedCardClick,
  sorted,
  resolveTenantQuota,
  leaderboardLoading,
}: UserOnlineHomePageProps) => {
  if (!mounted) return null;
  return (
    <div
      ref={containerRef}
      className="relative flex flex-col  mt-10  overflow-hidden "
    >
      {confetti.map((x, i) => (
        <motion.div
          key={i}
          className="absolute text-xl "
          initial={{ y: -50, x, opacity: 0 }}
          animate={{
            y: 1000,
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {coins[i % coins.length]}
        </motion.div>
      ))}

      <ActiveTenantsInterface
        tenantsLoading={tenantsLoading}
        featuredTenant={featuredTenant}
        popularTenants={popularTenants}
        search={search}
        setSearch={setSearch}
        tenantsError={tenantsError}
        selectedPopularTenant={selectedPopularTenant}
        setSelectedPopularTenant={setSelectedPopularTenant}
        filtered={filtered}
        primaryColor={primaryColor}
        handleSelectedCardClick={handleSelectedCardClick}
        sorted={sorted}
        resolveTenantQuota={resolveTenantQuota}
        leaderboardLoading={leaderboardLoading}
      />
      <AreaBackground>
        {tenant != null ? (
          <TenantSubscriptionModes
            currentTenantPlan={currentTenantPlan}
            tenantMaxedPlan={tenantMaxedPlan}
          />
        ) : (
          <UserSubscriptionModes
            currentUserPlan={currentUserPlan}
            userMaxedPlan={userMaxedPlan}
            handleUserSubscribe={handleUserSubscribe}
          />
        )}
      </AreaBackground>
    </div>
  );
};
export default UserOnlineHomePage;
