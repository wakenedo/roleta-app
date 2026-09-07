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
  globalProductsClicked,
  tenantProductsClicked,
}: UserAreaInterfaceProps) => {
  return (
    <AreaBackground>
      <main className="h-full font-sans overflow-hidden md:max-w-8xl mx-auto relative z-10 mt-4 flex flex-col items-center  md:px-4 px-1 ">
        {user && (
          <div className="w-full">
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
                userSubscriptionStatus={userSubscriptionStatus}
              />
            )}
            {activeTab === "visited" && (
              <UserOffersVisitedSection
                globalProductsClicked={globalProductsClicked}
                tenantProductsClicked={tenantProductsClicked}
              />
            )}
            {activeTab === "spin-history" && (
              <UserSpinHistorySection
                globalSpinHistory={globalSpinHistory}
                groupedTenantHistory={
                  groupedTenantHistory as Record<string, SpinHistoryItem[]>
                }
                isHistoryPreviewEmpty={isHistoryPreviewEmpty}
                router={router}
                userSpinsStats={userStats}
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
