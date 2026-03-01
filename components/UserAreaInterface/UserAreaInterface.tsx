import { DailyQuota } from "./DailyQuota";
import { Rewards } from "./Rewards";
import { UserStats } from "./UserStats";
import { UserCard } from "./UserCard";
import { UserAreaInterfaceProps } from "./types";

const UserAreaInterface: React.FC<UserAreaInterfaceProps> = ({
  user,
  data,
  logout,
  historyPreview,
  spins,
  loading,
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="md:max-w-3xl mx-auto relative z-10 min-h-screen flex flex-col items-center pt-4 md:px-4 px-1">
        {user && (
          <div className="w-full md:space-y-4 space-y-1 md:grid  mb-6">
            <UserCard user={user} logout={logout} />
            <DailyQuota
              historyPreview={historyPreview}
              spins={spins}
              loading={loading}
              data={data}
            />
            <UserStats data={data} />
            <Rewards />
          </div>
        )}
      </main>
    </div>
  );
};
export default UserAreaInterface;
