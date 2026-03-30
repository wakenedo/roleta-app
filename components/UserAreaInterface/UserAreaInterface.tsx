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
      <main className="relative z-10 flex flex-col items-center py-2 ">
        {user && (
          <div>
            <div className=" lg:justify-center xl:space-x-1 flex  xl:flex-row flex-col items-center">
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
