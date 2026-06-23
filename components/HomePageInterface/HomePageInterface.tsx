import { UserOfflineHomePage } from "./components/UserOfflineHomePage";
import { UserOnlineHomePage } from "./components/UserOnlineHomePage";
import { HomePageInterfaceProps } from "./types";

const HomePageInterface = ({
  coins,
  confetti,
  currentTenantPlan,
  currentUserPlan,
  featuredTenant,
  filtered,
  handleSelectedCardClick,
  handleToggle,
  handleUserSubscribe,
  mounted,
  onToggleChange,
  primaryColor,
  resolveTenantQuota,
  selectedPopularTenant,
  setSearch,
  setSelectedPopularTenant,
  sorted,
  tenantMaxedPlan,
  tenantsError,
  tenantsLoading,
  user,
  userMaxedPlan,
  containerRef,
  popularTenants,
  search,
  leaderboardLoading,
  tenant,
}: HomePageInterfaceProps) => {
  return (
    <>
      {user === null && (
        <UserOfflineHomePage
          currentTenantPlan={currentTenantPlan}
          currentUserPlan={currentUserPlan}
          userMaxedPlan={userMaxedPlan}
          onToggleChange={onToggleChange}
          handleToggle={handleToggle}
          tenantMaxedPlan={tenantMaxedPlan}
          handleUserSubscribe={handleUserSubscribe}
        />
      )}
      {user != null && (
        <UserOnlineHomePage
          currentTenantPlan={currentTenantPlan}
          currentUserPlan={currentUserPlan}
          tenantMaxedPlan={tenantMaxedPlan}
          userMaxedPlan={userMaxedPlan}
          tenant={tenant}
          containerRef={containerRef}
          mounted={mounted}
          coins={coins}
          confetti={confetti}
          tenantsLoading={tenantsLoading}
          featuredTenant={featuredTenant}
          popularTenants={popularTenants}
          search={search}
          setSearch={setSearch}
          tenantsError={tenantsError}
          handleUserSubscribe={handleUserSubscribe}
          selectedPopularTenant={selectedPopularTenant}
          setSelectedPopularTenant={setSelectedPopularTenant}
          filtered={filtered}
          primaryColor={primaryColor}
          handleSelectedCardClick={handleSelectedCardClick}
          sorted={sorted}
          resolveTenantQuota={resolveTenantQuota}
          leaderboardLoading={leaderboardLoading}
        />
      )}
    </>
  );
};
export default HomePageInterface;
