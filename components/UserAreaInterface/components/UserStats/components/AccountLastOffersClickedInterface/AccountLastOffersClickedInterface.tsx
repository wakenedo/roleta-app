import { formatPriceBRL } from "@/components/Slots/components/SlotsGame/components/ProductCard/utils";
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

  console.log("clicks", clicks);
  return (
    <UserAreaSectionBackground>
      <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 mb-2">
        Visitadas
      </span>

      <hr className="border-t border-slate-300 mb-4" />
      <div className=" max-w-full  overflow-x-auto">
        {/* ❌ Empty state */}
        {(!clicks || clicks.length === 0) && (
          <div className="flex absolute w-full flex-col items-center justify-center text-slate-500 pt-20">
            <BsCompass size={45} className="mb-2" />
            <span className="tracking-widest">Ainda nenhuma descoberta !</span>
          </div>
        )}
        <div className="h-65 max-w-5  flex  flex-nowrap space-x-4  scroll-smooth [scrollbar-width:none]">
          {/* ✅ Click events */}
          {clicks.map((click) => {
            const date = new Date(click.createdAt).toLocaleString();

            return (
              <div
                key={click.url}
                className="min-w-[180px] max-w-[180px] h-fit mt-1 mx-2  flex-shrink-0 bg-slate-700 p-4 flex flex-col justify-between shadow-md 
                hover:shadow-lg hover:scale-105 transition
                hover:bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 "
              >
                {/* IMAGE */}
                <img
                  src={click.image}
                  alt={click.name}
                  className="w-full h-20 object-cover mb-1 bg-slate-300"
                />

                {/* TEXT */}
                <div className="flex flex-col flex-1 cursor-default space-y-1">
                  <span className="text-sm font-semibold text-slate-100 line-clamp-2">
                    <a
                      href={click.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-center text-xs border border-amber-500 px-2 py-1  text-slate-200 hover:bg-amber-500 hover:text-black transition"
                    >
                      {click.name}
                    </a>
                  </span>
                  <span className="text-sm font-semibold text-slate-100 line-clamp-2">
                    {formatPriceBRL(click.price)}
                  </span>
                  <span className="text-xs text-slate-400 ">{date}</span>
                </div>

                {/* ACTION */}
                <span className="cursor-default text-left text-xs  pt-1  text-slate-200 ">
                  Comprou o produto ?
                </span>
                <div className="flex space-x-2 items-center mx-auto">
                  <a
                    href={click.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-center text-xs border border-emerald-500 px-2 py-1  text-slate-200 hover:bg-emerald-500 hover:text-slate-800 transition"
                  >
                    Sim
                  </a>
                  <a
                    href={click.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-center text-xs border border-red-500 px-2 py-1  text-slate-200 hover:bg-red-500 hover:text-black transition"
                  >
                    Não
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};

export default AccountLastOffersClickedInterface;
