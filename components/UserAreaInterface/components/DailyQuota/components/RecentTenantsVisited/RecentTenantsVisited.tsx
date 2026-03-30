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
  const formatTenantName = (tenantId: string | undefined) => {
    return tenantId?.split("-")[0];
  };
  const tenants = historyPreview
    ?.filter((spin) => spin.tenantId != null)
    ?.reduce((acc, spin) => {
      const existing = acc.get(spin.tenantId as string);

      if (!existing) {
        acc.set(spin.tenantId as string, spin);
        return acc;
      }

      // keep the most recent one
      if (new Date(spin.createdAt) > new Date(existing.createdAt)) {
        acc.set(spin.tenantId as string, spin);
      }

      return acc;
    }, new Map<string, SpinHistoryItem>())
    ?.values();

  const uniqueTenants = Array.from(tenants || []).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <UserAreaSectionBackground>
      <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Parceiros Recentes
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="text-center space-y-2 flex flex-col mx-auto">
        <div className="mb-6 max-h-30 overflow-scroll [scrollbar-width:none]   pb-4 text-slate-500">
          <div className=" overflow-scroll flex flex-col space-y-2 [scrollbar-width:none]">
            {(!uniqueTenants || uniqueTenants.length === 0) && (
              <div className="mt-6  cursor-default">
                <BsExclamationDiamond size={45} className="mx-auto mb-2" />
                <span className="tracking-widest">
                  Sem Parceiros visitados por enquanto...
                </span>
              </div>
            )}
            {uniqueTenants?.map(({ tenantId, createdAt }) => {
              const displayName = formatTenantName(tenantId);
              const date = new Date(createdAt).toLocaleString();

              return (
                <div
                  key={tenantId}
                  className="flex justify-between items-center p-3 bg-slate-600 shadow-2xs w-full"
                >
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="text-lg font-extrabold text-slate-300">
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

                  <div className="border border-amber-500 px-2 pb-1 items-center ">
                    <div>
                      <span
                        className="text-xs align-text-bottom font-semibold text-slate-300 cursor-pointer tracking-wide "
                        onClick={() => router.push(`/${tenantId}/slots`)}
                      >
                        Jogar Novamente
                      </span>
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
export default RecentTenantsVisited;
