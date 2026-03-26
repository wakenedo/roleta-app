import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { ClickEvent } from "@/context/UserContext/types";
import { BsCompass } from "react-icons/bs";

const AccountLastOffersClickedInterface = ({
  accountClickEvents,
}: {
  accountClickEvents: ClickEvent[] | undefined;
}) => {
  // 🧠 Deduplicate (keep most recent per URL)
  const uniqueClicksMap = accountClickEvents
    ?.filter((c) => c?.url)
    ?.reduce((acc, click) => {
      const existing = acc.get(click.url);

      if (!existing) {
        acc.set(click.url, click);
        return acc;
      }

      if (new Date(click.createdAt) > new Date(existing.createdAt)) {
        acc.set(click.url, click);
      }

      return acc;
    }, new Map<string, ClickEvent>());

  const clicks = uniqueClicksMap
    ? Array.from(uniqueClicksMap.values()).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    : [];

  return (
    <UserAreaSectionBackground>
      <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2">
        Visitadas
      </span>

      <hr className="border-t border-slate-300 mb-4" />

      <div className="h-65 overflow-y-auto space-y-2">
        {/* ❌ Empty state */}
        {(!clicks || clicks.length === 0) && (
          <div className="flex h-65 w-full flex-col items-center justify-center text-slate-500">
            <BsCompass size={45} className="mb-2" />
            <span className="tracking-widest">Ainda nenhuma descoberta !</span>
          </div>
        )}

        {/* ✅ Click events */}
        {clicks.map((click) => {
          const date = new Date(click.createdAt).toLocaleString();

          return (
            <div
              key={click.url}
              className="flex items-center justify-between bg-slate-600 p-2 rounded"
            >
              {/* LEFT */}
              <div className="flex items-center space-x-3">
                <img
                  src={click.image}
                  alt={click.name}
                  className="w-12 h-12 object-cover rounded"
                />

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-200 line-clamp-1">
                    {click.name}
                  </span>
                  <span className="text-xs text-slate-300">
                    Último clique: {date}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <a
                href={click.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-amber-500 px-2 py-1 text-slate-200 hover:bg-amber-500 hover:text-black transition"
              >
                Ver
              </a>
            </div>
          );
        })}
      </div>
    </UserAreaSectionBackground>
  );
};

export default AccountLastOffersClickedInterface;
