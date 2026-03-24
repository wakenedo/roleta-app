import { UserCardProps } from "../../types";
import { UserStats } from "../UserStats";
import { UserOptions } from "./components/UserOptions";
import { FC } from "react";

const UserCard: FC<UserCardProps> = ({ user, logout, data }) => {
  const subStatus = data?.user.subscription;
  return (
    <div>
      {user && (
        <div className=" min-w-6xl">
          <div className="z-20 flex flex-col pb-3 px-6 border-r border-amber-500">
            <UserOptions user={user} logout={logout} subStatus={subStatus} />
            <UserStats data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
