import { UserOptions } from "./components/UserOptions";
import { FC } from "react";
import { UserCardProps } from "../types";

const UserCard: FC<UserCardProps> = ({ user, logout }) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2 ">
      {user && (
        <div className="flex flex-col gap-3 ">
          <div>
            <span className="text-sm font-semibold text-slate-800 line-clamp-2">
              Bem-vindo, {user.displayName ?? "usuário"} !
            </span>
          </div>
          <hr className="border-t border-slate-300" />
          <UserOptions user={user} logout={logout} />
        </div>
      )}
    </div>
  );
};

export default UserCard;
