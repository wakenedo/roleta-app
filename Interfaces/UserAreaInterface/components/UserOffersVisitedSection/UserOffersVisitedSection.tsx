import { ClickEvent } from "@/context/UserContext/types";
import { UserLastClickedOffers } from "./components/UserLastClickedOffers";

const UserOffersVisitedSection = ({
  userClickEvents,
}: {
  userClickEvents: ClickEvent[] | undefined;
}) => {
  return (
    <div className="bg-white/90 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4  px-3 py-3 ">
        <UserLastClickedOffers accountClickEvents={userClickEvents} />
      </div>
    </div>
  );
};
export default UserOffersVisitedSection;
