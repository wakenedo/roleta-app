"use client";

import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { useRouter } from "next/navigation";
import { SpinHistoryItem, UserState } from "@/context/UserContext/types";
import { ProductHistoryCard } from "./components/ProductHistoryCard";

const DailyOffersHistory = ({
  data,
  historyPreview,
}: {
  data: UserState | null;
  historyPreview: SpinHistoryItem[] | SpinHistoryItem | null | undefined;
}) => {
  const router = useRouter();

  // normalize safely
  const history: SpinHistoryItem[] = Array.isArray(historyPreview)
    ? historyPreview
    : historyPreview
      ? [historyPreview]
      : [];

  const isEmpty = history.length === 0;

  return (
    <UserAreaSectionBackground>
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Histórico de Ofertas
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="max-h-75 overflow-scroll   [scrollbar-width:none]">
        {isEmpty ? (
          <div className="text-center mb-2 space-y-2 flex flex-col max-w-sm mx-auto">
            <div className="my-4">
              <span>Sem histórico por enquanto...</span>
            </div>

            <button
              className="cursor-pointer py-2 drop-shadow-xl text-shadow-2xs
              bg-green-400 hover:bg-green-200 transition
              text-slate-50 rounded-xs disabled:bg-slate-400 pb-2 font-semibold"
              onClick={() => router.push("/")}
            >
              Começe a Jogar
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((spin) => (
              <ProductHistoryCard
                key={spin.createdAt}
                spin={spin}
                data={data}
              />
            ))}
          </div>
        )}
      </div>
    </UserAreaSectionBackground>
  );
};

export default DailyOffersHistory;
