"use client";

import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { useRouter } from "next/navigation";
import { SpinHistoryItem } from "@/context/UserContext/types";
import { ProductHistoryCard } from "./components/ProductHistoryCard";
import { BsExclamation } from "react-icons/bs";

const DailyOffersHistory = ({
  historyPreview,
}: {
  historyPreview: SpinHistoryItem[];
}) => {
  const router = useRouter();

  const isEmpty = historyPreview.length === 0;
  return (
    <UserAreaSectionBackground>
      <h3 className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
        Histórico de Descobertas
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <div className="max-h-100 overflow-scroll   [scrollbar-width:none]">
        {isEmpty ? (
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
        ) : (
          <div className="space-y-3">
            {historyPreview.map((spin) => (
              <ProductHistoryCard key={spin.createdAt} spin={spin} />
            ))}
          </div>
        )}
      </div>
    </UserAreaSectionBackground>
  );
};

export default DailyOffersHistory;
