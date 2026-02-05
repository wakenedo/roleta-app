import { User } from "firebase/auth";
import { UserOptions } from "./components/UserOptions";

const UserCard = ({
  user,
  logout,
}: {
  user: User | null;
  logout: () => void;
}) => {
  return (
    <div className="w-full bg-white/90 backdrop-blur rounded-lg shadow-md p-4 ">
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
