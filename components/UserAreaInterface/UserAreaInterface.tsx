import { DailyQuota } from "./components/DailyQuota";
import { UserCard } from "./components/UserCard";

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
    <div className="relative  overflow-hidden ">
      <main className="mx-auto relative z-10 flex flex-col items-center pt-2 md:px-4 px-1">
        {user && (
          <div>
            <div className=" md:justify-center space-x-1 md:flex  ">
              <UserCard user={user} logout={logout} data={data} />
              <DailyQuota
                historyPreview={historyPreview}
                spins={spins}
                loading={loading}
                data={data}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default UserAreaInterface;
