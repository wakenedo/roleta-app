import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";
import { CategoryImage } from "@/components/CategoryImage";
import { ClickEvent } from "@/context/UserContext/types";
import { formatPriceBRL } from "@/utils/formatter-utils";
import { BsCompass } from "react-icons/bs";

const UserLastClickedGlobalOffers = ({
  globalProductsClicked,
}: {
  globalProductsClicked: ClickEvent[];
}) => {
  return (
    <UserAreaSectionBackground>
      <span className="cursor-default text-lg font-semibold tracking-widest text-amber-500 ">
        Catalogo Promobet
      </span>

      <hr className="border-t border-slate-300 mb-4" />
      <div className=" max-w-full  overflow-x-auto">
        {/* ❌ Empty state */}
        {(!globalProductsClicked || globalProductsClicked.length === 0) && (
          <div className="flex absolute w-full flex-col items-center justify-center text-slate-500 pt-20">
            <BsCompass size={45} className="mb-2" />
            <span className="tracking-widest">Ainda nenhuma descoberta !</span>
          </div>
        )}
        <div className="px-4 lg:h-63 my-5  flex  flex-wrap overflow-y-auto  space-y-4  scroll-smooth [scrollbar-width:none]">
          {/* ✅ Click events */}
          {globalProductsClicked.map((click) => {
            const date = new Date(click.createdAt).toLocaleString();

            return (
              <div
                key={click.url}
                className=" h-fit mx-1  shrink-0 bg-slate-700 px-1 py-1  
                flex  justify-between shadow-md hover:opacity-100 opacity-50
                hover:shadow-lg hover:scale-101 transition
                space-x-2 rounded border-l-2 border-amber-500
                hover:bg-linear-to-r from-[#84e9e4]/1 to-purple-500/15 "
              >
                <div className="flex flex-col w-full justify-between h-full space-y-2">
                  <a
                    href={click.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:max-w-85 hover:bg-linear-to-r 
                    from-[#84e9e4]/1 to-purple-500/15 border-l-2 
                    border-amber-500 rounded hover:opacity-100 opacity-50 
                    bg-slate-900 text-slate-200  transition  px-2 py-1
                    hover:font-medium font-light 
                    "
                  >
                    <span className="text-sm   line-clamp-2">{click.name}</span>
                  </a>
                  {/* TEXT */}
                  <div className="flex justify-between  flex-1 cursor-default space-y-1 space-x-1">
                    {click.image ? (
                      <img
                        src={click.image}
                        alt={click.name}
                        className="w-30 h-30 object-cover mb-1 bg-slate-300"
                      />
                    ) : (
                      <div className="lg:w-30 lg:h-30 ">
                        <CategoryImage
                          object="object-cover"
                          productCategory={click.category}
                          rounded="rounded"
                        />
                      </div>
                    )}
                    <div className="flex flex-col-reverse">
                      <div className="ml-auto mb-1 text-center  transition  px-3 py-1 border rounded-full w-fit border-slate-300 mr-1">
                        <span className="text-xs font-semibold text-slate-300 line-clamp-4">
                          {click.mode && "Promobet"}
                        </span>
                      </div>
                      <div className="flex mb-1 flex-row-reverse w-full pr-1">
                        <span className="text-xs text-center text-slate-400 ">
                          {date}
                        </span>
                      </div>
                      <div className="flex flex-row-reverse w-full pr-1">
                        <span className="text-lg font-semibold text-[#84e9e4] line-clamp-2">
                          {formatPriceBRL(click.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserAreaSectionBackground>
  );
};
export default UserLastClickedGlobalOffers;
