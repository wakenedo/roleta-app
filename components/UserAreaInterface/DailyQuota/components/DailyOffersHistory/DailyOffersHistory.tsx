import { Product } from "@/components/Slots/types";
import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";

const DailyOffersHistory = ({
  historyPreview,
}: {
  historyPreview: unknown; // we'll talk about typing later
}) => {
  const offers = Array.isArray(historyPreview)
    ? historyPreview
    : [historyPreview];

  const firstOfferProducts = offers[0]?.products ?? [];

  console.log("products from first offer", firstOfferProducts);

  return (
    <UserAreaSectionBackground>
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Histórico de Ofertas
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      {!historyPreview && <div>Começe a girar</div>}
      <div>
        {firstOfferProducts.map((product: Product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </UserAreaSectionBackground>
  );
};

export default DailyOffersHistory;
