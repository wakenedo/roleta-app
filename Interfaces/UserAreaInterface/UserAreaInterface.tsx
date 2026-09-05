import { AreaBackground } from "@/backgrounds/AreaBackground";
import { UserAreaInterfaceProps } from "./types";
import { UserCardHeader } from "./components/UserCardHeader";
import { HeaderAdvancedSettingsModal } from "./components/UserCardHeader/components/HeaderAdvancedSettingsModal";
import { SpinHistoryItem } from "@/context/UserContext/types";
import { UserGeneralSection } from "./components/UserGeneralSection";
import { UserOffersVisitedSection } from "./components/UserOffersVisitedSection";
import { UserSpinHistorySection } from "./components/UserSpinHistorySection";
import { UserTrophiesSection } from "./components/UserTrophiesSection";

const UserAreaInterface = ({
  user,
  userName,
  userEmail,
  userPhotoURL,
  subStatus,
  userStats,
  userSubscriptionStatus,
  userLimitQuotas,
  userClickEvents,
  loading,
  activeModal,
  activeTab,
  setActiveModal,
  setActiveTab,
  closeModal,
  logout,
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
}: UserAreaInterfaceProps) => {
  return (
    <AreaBackground>
      <main className="font-sans overflow-hidden md:max-w-8xl mx-auto relative z-10 mb-4 flex flex-col items-center  md:px-4 px-1 ">
        {user && (
          <div className="w-full h-full   ">
            <UserCardHeader
              userName={userName as string}
              userEmail={userEmail}
              userPhotoURL={userPhotoURL}
              subStatus={subStatus}
              activeTab={activeTab}
              setActiveModal={setActiveModal}
              setActiveTab={setActiveTab}
              logout={logout}
            />
            {activeTab === "general" && (
              <UserGeneralSection
                barColor={barColor}
                dailyQuotaLimit={dailyQuotaLimit}
                isQuotaEmpty={isQuotaEmpty}
                progressBar={progressBar}
                quotaCooldownTimeLeft={quotaCooldownTimeLeft}
                remainingQuota={remainingQuota}
                router={router}
                uniqueTenants={uniqueTenants}
                userLimitQuotas={userLimitQuotas}
                userStats={userStats}
                userSubscriptionStatus={userSubscriptionStatus}
              />
            )}
            {activeTab === "visited" && (
              <UserOffersVisitedSection userClickEvents={userClickEvents} />
            )}
            {activeTab === "spin-history" && (
              <UserSpinHistorySection
                globalSpinHistory={globalSpinHistory}
                groupedTenantHistory={
                  groupedTenantHistory as Record<string, SpinHistoryItem[]>
                }
                isHistoryPreviewEmpty={isHistoryPreviewEmpty}
                router={router}
              />
            )}
            {activeTab === "trophies" && <UserTrophiesSection />}
          </div>
        )}
      </main>
      {activeModal && (
        <HeaderAdvancedSettingsModal
          activeModal={activeModal}
          closeModal={closeModal}
        />
      )}
    </AreaBackground>
  );
};
export default UserAreaInterface;
