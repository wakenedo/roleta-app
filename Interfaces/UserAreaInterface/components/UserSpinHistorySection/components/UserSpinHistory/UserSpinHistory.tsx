import { SpinHistoryItem } from "@/context/UserContext/types";
import { BsExclamation } from "react-icons/bs";
import { formatTenantName } from "@/utils/formatter-utils";
import { UserAreaSectionBackground } from "@/Interfaces/UserAreaInterface/UserAreaSectionBackground";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ProductHistoryCard } from "../ProductHistoryCard";

const UserSpinHistory = ({
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
    <UserAreaSectionBackground>
      <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-1">
        Descobertas
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="max-h-137 overflow-scroll [scrollbar-width:none]">
        {isHistoryPreviewEmpty && (
          <div className="cursor-default text-center space-y-2 flex flex-col max-w-sm mx-auto">
            <div className="my-4 pb-4 text-slate-500">
              <BsExclamation size={45} className="mx-auto" />
              <span className="tracking-widest">
                Sem histórico por enquanto...
              </span>
            </div>

            <button
              className="cursor-pointer text-lg  py-2 drop-shadow-xl text-shadow-2xs tracking-widest
              bg-amber-500 hover:bg-yellow-200 transition
              text-[#84e9e4] rounded-xs disabled:bg-slate-400 pb-2 font-bold "
              onClick={() => router.push("/Games")}
            >
              Jogar
            </button>
          </div>
        )}
        <div className="space-y-6">
          {/* 🌍 GLOBAL */}
          {globalSpinHistory && globalSpinHistory.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-500 mb-2">Global</h4>

              <div className="space-y-3">
                {globalSpinHistory.map((spin) => (
                  <ProductHistoryCard key={spin.createdAt} spin={spin} />
                ))}
              </div>
            </div>
          )}

          {/* 🏪 TENANTS */}
          {Object.entries(groupedTenantHistory).map(([tenantId, spins]) => (
            <div key={tenantId}>
              <h4 className="text-sm font-bold text-slate-500 mb-2">
                {formatTenantName(tenantId)}
              </h4>

              <div className="space-y-3">
                {spins.map((spin) => (
                  <ProductHistoryCard key={spin.createdAt} spin={spin} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};

export default UserSpinHistory;
