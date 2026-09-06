import { ClickEvent } from "@/context/UserContext/types";
import { UserLastClickedOffers } from "./components/UserLastClickedOffers";
import { UserLastClickedGlobalOffers } from "./components/UserLastClickedGlobalOffers";

const UserOffersVisitedSection = ({
  userClickEvents,
}: {
  userClickEvents: ClickEvent[] | undefined;
}) => {
  return (
    <div className="bg-white/50 backdrop-blur  px-1 w-full h-fit pb-1">
      <div className=" bg-white backdrop-blur shadow-md md:px-4 md:py-3  px-3 py-3 ">
        <div className="flex flex-col space-y-2">
          <UserLastClickedOffers accountClickEvents={userClickEvents} />
          <UserLastClickedGlobalOffers />
        </div>
      </div>
    </div>
  );
};
export default UserOffersVisitedSection;
