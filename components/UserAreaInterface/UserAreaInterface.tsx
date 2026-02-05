import { User } from "firebase/auth";
import { BannerPromo } from "../BannerPromo";
import { DailyQuota } from "./DailyQuota";
import { Rewards } from "./Rewards";
import { UserStats } from "./UserStats";
import { UserCard } from "./UserCard";

const UserAreaInterface = ({
  user,
  logout,
}: {
  user: User | null;
  logout: () => void;
}) => {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[-1]" />

      <main className="md:max-w-3xl mx-auto relative z-10 min-h-screen flex flex-col items-center pt-6 px-4">
        {/* Promo */}
        <div className="w-full  mb-6">
          <BannerPromo />
        </div>

        {/* User Card */}

        {/* Stats */}
        {user && (
          <div className="w-full  grid gap-4 mb-6">
            <UserCard user={user} logout={logout} />
            <DailyQuota />
            <UserStats user={user} />
            <Rewards />
          </div>
        )}
      </main>
    </div>
  );
};
export default UserAreaInterface;
