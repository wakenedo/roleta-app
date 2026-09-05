import { SpinHistoryItem } from "@/context/UserContext/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { UserSpinHistory } from "./components/UserSpinHistory";

const UserSpinHistorySection = ({
  isHistoryPreviewEmpty,
  groupedTenantHistory,
  globalSpinHistory,
  router,
}: {
  isHistoryPreviewEmpty: boolean;
  globalSpinHistory: SpinHistoryItem[] | undefined;
  groupedTenantHistory: Record<string, SpinHistoryItem[]>;
  router: AppRouterInstance;
}) => {
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4  px-3 py-3 ">
        <div className=" w-fit lg:justify-center xl:space-x-1 flex  xl:flex-row flex-col items-center">
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
  );
};
export default UserSpinHistorySection;
