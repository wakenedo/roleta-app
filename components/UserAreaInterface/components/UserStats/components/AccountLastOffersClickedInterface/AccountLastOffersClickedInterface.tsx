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
      <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2">
        Visitadas
      </span>

      <hr className="border-t border-slate-300 mb-4" />

      <div className="h-65 flex overflow-x-auto flex-nowrap space-x-4 [&::-webkit-scrollbar]:hidden scroll-smooth">
        {/* ❌ Empty state */}
        {(!clicks || clicks.length === 0) && (
          <div className="flex h-full w-full flex-col items-center justify-center text-slate-500">
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
              className="min-w-[180px] max-w-[180px] h-fit m-2  flex-shrink-0 bg-slate-700 p-4 flex flex-col justify-between shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              {/* IMAGE */}
              <img
                src={click.image}
                alt={click.name}
                className="w-full h-28 object-cover mb-3 border"
              />

              {/* TEXT */}
              <div className="flex flex-col flex-1 cursor-default">
                <span className="text-sm font-semibold text-slate-100 line-clamp-2">
                  {click.name}
                </span>
                <span className="text-xs text-slate-400 mt-1">{date}</span>
              </div>

              {/* ACTION */}
              <a
                href={click.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-center text-xs border border-amber-500 px-2 py-1  text-slate-200 hover:bg-amber-500 hover:text-black transition"
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
