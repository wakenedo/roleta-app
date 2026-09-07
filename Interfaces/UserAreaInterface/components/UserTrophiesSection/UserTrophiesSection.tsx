import { UsersAcquirableTrophies } from "./components/UserAcquirableTrophies";
import { UserAcquiredTrophies } from "./components/UserAcquiredTrophies";

const UserTrophiesSection = () => {
  return (
    <div className="bg-white/50 backdrop-blur shadow-md px-1 w-full h-fit pb-1">
      <div className=" bg-white backdrop-blur shadow-md md:px-4 md:py-3  px-3 py-3 ">
        <div className="flex flex-col space-y-2">
          <UserAcquiredTrophies />
          <UsersAcquirableTrophies />
        </div>
      </div>
    </div>
  );
};
export default UserTrophiesSection;
