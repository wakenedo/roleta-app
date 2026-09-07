import { SpinHistoryItem } from "@/context/UserContext/types";
import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";
import { formatTenantNameAllowIdUndefined } from "@/utils/formatter-utils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { BsExclamationDiamond } from "react-icons/bs";

const UserRecentTenants = ({
  uniqueTenants,
  router,
  isQuotaEmpty,
}: {
  uniqueTenants: SpinHistoryItem[];
  router: AppRouterInstance;
  isQuotaEmpty: boolean;
}) => {
  return (
    <UserAreaSectionBackground>
      <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Parceiros Recentes
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="text-center space-y-2 flex flex-col mx-auto ">
        <div
          className={`rounded  overflow-scroll [scrollbar-width:none] h-30 
          ${!isQuotaEmpty ? " lg:h-65" : "lg:h-88"} lg:max-h-88.5  border-slate-300   border border-dashed
        p-1 pt-2 text-slate-500`}
        >
          <div className=" overflow-scroll flex flex-col space-y-2 [scrollbar-width:none]">
            {(!uniqueTenants || uniqueTenants.length === 0) && (
              <div
                className={`${!isQuotaEmpty ? " mt-20" : "mt-32 "}  cursor-default`}
              >
                <BsExclamationDiamond size={45} className={`mx-auto mb-2`} />
                <span className="tracking-widest">
                  Sem Parceiros visitados por enquanto...
                </span>
              </div>
            )}
            {uniqueTenants?.map(({ tenantId, createdAt }) => {
              const displayName = formatTenantNameAllowIdUndefined(tenantId);
              const date = new Date(createdAt).toLocaleString();

              return (
                <div
                  key={tenantId}
                  onClick={() => router.push(`/${tenantId}/slots`)}
                  className="cursor-pointer rounded-md  flex border-l-2 
                  border-[#84e9e4] justify-between items-center p-3 
                  bg-slate-600  lg:w-full max-w-full w-sm
                  hover:shadow-lg transition ease-in h-fit opacity-50 hover:opacity-100
                  hover:bg-linear-to-r from-[#84e9e4]/1 to-purple-500/15 
                  "
                >
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-md font-extrabold text-slate-300">
                        {displayName}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <div>
                        <span className="text-xs text-slate-300">
                          Ultima Rodada :
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-slate-300">{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};
export default UserRecentTenants;
