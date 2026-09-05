"use client";

import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";
import UserAreaInterface from "../UserAreaInterface";
import { useUserArea } from "@/hooks/pages/useUserArea";

const UserAreaClient = () => {
  const {
    user,
    userName,
    userEmail,
    userPhotoURL,
    subStatus,
    userStats,
    userLimitQuotas,
    userSubscriptionStatus,
    userClickEvents,
    quota,
    loading,
    authLoading,
    activeTab,
    activeModal,
    setActiveTab,
    setActiveModal,
    closeModal,
    logout,
    resetAt,
    isHistoryPreviewEmpty,
    globalSpinHistory,
    groupedTenantHistory,
    router,
    uniqueTenants,
    barColor,
    isQuotaEmpty,
    dailyQuotaLimit,
    progressBar,
    remainingQuota,
    quotaCooldownTimeLeft,
  } = useUserArea();

  if (authLoading) {
    return null; // or a loading UI
  }

  if (!user) {
    window.location.replace("/");
    return null;
  }

  return (
    <HeaderAndFooterInterface>
      <UserAreaInterface
        user={user}
        userName={userName as string}
        loading={loading}
        activeTab={activeTab}
        activeModal={activeModal}
        setActiveTab={setActiveTab}
        setActiveModal={setActiveModal}
        closeModal={closeModal}
        logout={logout}
        subStatus={subStatus}
        userPhotoURL={userPhotoURL}
        userEmail={userEmail}
        userStats={userStats}
        userLimitQuotas={userLimitQuotas}
        userSubscriptionStatus={userSubscriptionStatus}
        userClickEvents={userClickEvents}
        isHistoryPreviewEmpty={isHistoryPreviewEmpty}
        globalSpinHistory={globalSpinHistory}
        groupedTenantHistory={groupedTenantHistory}
        router={router}
        uniqueTenants={uniqueTenants}
        barColor={barColor}
        isQuotaEmpty={isQuotaEmpty}
        dailyQuotaLimit={dailyQuotaLimit}
        progressBar={progressBar}
        remainingQuota={remainingQuota}
        quotaCooldownTimeLeft={quotaCooldownTimeLeft}
      />
    </HeaderAndFooterInterface>
  );
};
export default UserAreaClient;
