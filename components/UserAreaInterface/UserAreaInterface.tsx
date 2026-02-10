import { User } from "firebase/auth";
import { BannerPromo } from "../BannerPromo";
import { DailyQuota } from "./DailyQuota";
import { Rewards } from "./Rewards";
import { UserStats } from "./UserStats";
import { UserCard } from "./UserCard";
import { UserState } from "@/context/UserContext/types";

const UserAreaInterface = ({
  user,
  data,
  logout,
}: {
  user: User | null;
  data: UserState | null;
  logout: () => void;
}) => {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-[-1]" />
      <main className="mt-8 md:max-w-3xl mx-auto relative z-10 min-h-screen flex flex-col items-center pt-6 px-4">
        {user && (
          <div className="w-full  grid gap-4 mb-6">
            <UserCard user={user} logout={logout} />
            <DailyQuota />
            <UserStats data={data} />
            <Rewards />
          </div>
        )}
      </main>
    </div>
  );
};
export default UserAreaInterface;
