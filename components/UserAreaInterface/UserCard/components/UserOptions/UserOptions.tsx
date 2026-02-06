import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";
import { User } from "firebase/auth";
import { FaPowerOff } from "react-icons/fa";

const UserOptions = ({
  user,
  logout,
}: {
  user: User | null;
  logout: () => void;
}) => {
  return (
    <UserAreaSectionBackground>
      <div className="flex justify-between gap-3">
        {user && (
          <>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName ?? "User"}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div className="flex justify-between w-full items-center">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {user.displayName ?? "Usuário"}
                </p>
                <p className="text-xs text-slate-600">{user.email}</p>
              </div>
              <FaPowerOff
                color="#aeb3b8"
                size={14}
                className="mr-1 w-fit"
                onClick={logout}
              />
            </div>
          </>
        )}
      </div>
    </UserAreaSectionBackground>
  );
};
export default UserOptions;
