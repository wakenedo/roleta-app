import { UserCardProps } from "../../types";
import { UserStats } from "../UserStats";
import { UserOptions } from "./components/UserOptions";
import { FC } from "react";

const UserCard: FC<UserCardProps> = ({ user, logout, data }) => {
  const subStatus = data?.user.subscription;
  return (
    <div>
      {user && (
        <div className="2xl:max-w-6xl md:max-w-3xl">
          <div className="z-20 flex flex-col px-6 ">
            <UserOptions user={user} logout={logout} subStatus={subStatus} />
            <UserStats data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
