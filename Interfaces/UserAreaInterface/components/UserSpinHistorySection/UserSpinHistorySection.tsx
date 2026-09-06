import { SpinHistoryItem, UserStats } from "@/context/UserContext/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserSpinHistory } from "./components/UserSpinHistory";
import { UserSpinsStats } from "./components/UserSpinsStats";
import { UserGlobalSpinsStats } from "./components/UserGlobalSpinsStats";

const UserSpinHistorySection = ({
  isHistoryPreviewEmpty,
  groupedTenantHistory,
  globalSpinHistory,
  router,
  userSpinsStats,
}: {
  isHistoryPreviewEmpty: boolean;
  globalSpinHistory: SpinHistoryItem[] | undefined;
  groupedTenantHistory: Record<string, SpinHistoryItem[]>;
  router: AppRouterInstance;
  userSpinsStats: UserStats | undefined;
}) => {
  return (
    <div className="bg-white/50 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white backdrop-blur shadow-md md:px-4 md:py-3  px-3 py-3 ">
        <div className="flex space-x-2">
          <div className="w-full flex flex-col space-y-2">
            <UserSpinsStats userSpinsStats={userSpinsStats} />
            <UserGlobalSpinsStats />
          </div>
          <div className=" w-full lg:justify-center xl:space-x-1 flex  xl:flex-row flex-col items-center">
            <UserSpinHistory
              isHistoryPreviewEmpty={isHistoryPreviewEmpty}
              globalSpinHistory={globalSpinHistory}
              groupedTenantHistory={
                groupedTenantHistory as Record<string, SpinHistoryItem[]>
              }
              router={router}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSpinHistorySection;
