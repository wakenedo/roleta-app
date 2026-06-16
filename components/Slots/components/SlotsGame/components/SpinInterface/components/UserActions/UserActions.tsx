import { useState } from "react";
import { UserActionsHeader } from "./components/UserActionsHeader";
import { UserActionsLimits } from "./components/UserActionsLimits";
import { UserActionsExtras } from "./components/UserActionsExtras";
import { UserActionsReport } from "./components/UserActionsReport";

const UserActions = ({
  userMonthlyLimit,
  userWeeklyLimit,
}: {
  userMonthlyLimit:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
  userWeeklyLimit:
    | {
        limit: number;
        remaining: number;
        used: number;
      }
    | undefined;
}) => {
  const [activeTab, setActiveTab] = useState<"limits" | "extras" | "report">(
    "limits",
  );
  return (
    <div>
      <UserActionsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "limits" && (
        <UserActionsLimits
          userMonthlyLimit={userMonthlyLimit}
          userWeeklyLimit={userWeeklyLimit}
        />
      )}
      {activeTab === "extras" && <UserActionsExtras />}
      {activeTab === "report" && <UserActionsReport />}
    </div>
  );
};
export default UserActions;
