import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { SpinHistoryItem } from "@/context/UserContext/types";
import { useRouter } from "next/navigation";
import { BsExclamationDiamond } from "react-icons/bs";

const RecentTenantsVisited = ({
  historyPreview,
}: {
  historyPreview: SpinHistoryItem[] | undefined;
}) => {
  const router = useRouter();
  const formatTenantName = (tenantId: string) => {
    return tenantId.split("-")[0];
  };
  const tenants = historyPreview
    ?.map((spin) => spin.tenantId)
    .filter((id) => id !== null && id !== undefined);

  console.log("RecentTenantsVisited tenants", tenants);
  return (
    <UserAreaSectionBackground>
      <h3 className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Parceiros Recentes
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="text-center space-y-2 flex flex-col mx-auto">
        <div className="mb-6 max-h-30 overflow-scroll [scrollbar-width:none]   pb-4 text-slate-600">
          <div className=" overflow-scroll flex flex-col space-y-2 [scrollbar-width:none]">
            {!tenants && (
              <>
                <BsExclamationDiamond size={45} className="mx-auto mb-4" />
                <span className="tracking-widest">
                  Sem Parceiros visitados por enquanto...
                </span>
              </>
            )}
            {tenants?.map((tenantId) => {
              const displayName = formatTenantName(tenantId);

              return (
                <div
                  key={tenantId}
                  className="flex justify-between p-3 bg-slate-600 shadow-2xs w-full"
                >
                  <div>
                    <span className="text-lg font-extrabold text-slate-300">
                      {displayName}
                    </span>
                  </div>

                  <div className="border border-amber-500 px-2 ">
                    <span
                      className="text-xs font-semibold text-slate-300 cursor-pointer tracking-wide "
                      onClick={() => router.push(`/${tenantId}/slots`)}
                    >
                      Jogar Novamente
                    </span>
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
export default RecentTenantsVisited;
