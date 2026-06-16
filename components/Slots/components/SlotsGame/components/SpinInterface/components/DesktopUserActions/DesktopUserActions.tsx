import { useRef, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { UserActionsReport } from "../UserActions/components/UserActionsReport";
import { DUserActionsHeader } from "./components/DUserActionsHeader";
import { DUserActionsLimits } from "./components/DUserActionsLimits";
import DUserActionsExtras from "./components/DUserActionsExtras/DUserActionsExtras";
import { DUserActionsReport } from "./components/DUserActionsReport";

const DesktopUserActions = ({
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
  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<"limits" | "extras" | "report">(
    "limits",
  );

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <div
      className="hidden lg:block absolute right-3 top-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsExclamationCircle size={14} className="cursor-pointer" />

      <div
        className={`
          absolute right-0 top-4 w-[320px]
          bg-white/20 backdrop-blur-sm
          rounded-lg shadow-xl p-2 z-50

          transition-all duration-300 ease-out

          ${
            open
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }
        `}
      >
        <DUserActionsHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "limits" && (
          <DUserActionsLimits
            userMonthlyLimit={userMonthlyLimit}
            userWeeklyLimit={userWeeklyLimit}
          />
        )}

        {activeTab === "extras" && <DUserActionsExtras />}

        {activeTab === "report" && <DUserActionsReport />}
      </div>
    </div>
  );
};

export default DesktopUserActions;
