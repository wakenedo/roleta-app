import { Product } from "@/components/Slots/types";
import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { redirect } from "next/navigation";

const DailyOffersHistory = ({
  historyPreview,
}: {
  historyPreview: unknown;
}) => {
  const offers = Array.isArray(historyPreview)
    ? historyPreview
    : [historyPreview];

  const allProducts = offers.flatMap((offer) => offer?.products ?? []);

  if (allProducts.length === 0) {
    return (
      <UserAreaSectionBackground>
        <h3 className="text-sm font-semibold text-slate-800 mb-2">
          Histórico de Ofertas
        </h3>
        <hr className="border-t border-slate-300 mb-4" />
        <div className="text-center mb-2 space-y-2 flex flex-col max-w-sm mx-auto">
          <div className="my-4">
            <span>Sem histórico por enquanto...</span>
          </div>
          <button
            className="
      cursor-pointer  py-2 drop-shadow-xl text-shadow-2xs
       bg-green-400 hover:bg-green-200 transition
      text-slate-50 rounded-xs disabled:bg-slate-400 pb-2 font-semibold"
            onClick={() => redirect("/")}
          >
            Começe a Jogar
          </button>
        </div>
      </UserAreaSectionBackground>
    );
  }

  return (
    <UserAreaSectionBackground>
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Histórico de Ofertas
      </h3>
      <hr className="border-t border-slate-300 mb-4" />

      <div>
        {allProducts.map((product: Product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </UserAreaSectionBackground>
  );
};

export default DailyOffersHistory;
