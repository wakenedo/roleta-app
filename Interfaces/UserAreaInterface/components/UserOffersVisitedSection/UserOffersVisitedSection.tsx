import { ClickEvent } from "@/context/UserContext/types";
import { UserLastClickedOffers } from "./components/UserLastClickedOffers";
import { UserLastClickedGlobalOffers } from "./components/UserLastClickedGlobalOffers";

const UserOffersVisitedSection = ({
  tenantProductsClicked,
  globalProductsClicked,
}: {
  tenantProductsClicked: ClickEvent[];
  globalProductsClicked: ClickEvent[];
}) => {
  return (
    <div className="bg-white/50 backdrop-blur  px-1 w-full h-fit pb-1">
      <div className=" bg-white backdrop-blur shadow-md md:px-1 md:py-3  px-3 py-3 ">
        <div className="flex flex-col space-y-2 mb-2">
          <UserLastClickedOffers
            tenantProductsClicked={tenantProductsClicked}
          />
          <UserLastClickedGlobalOffers
            globalProductsClicked={globalProductsClicked}
          />
        </div>
      </div>
    </div>
  );
};
export default UserOffersVisitedSection;
