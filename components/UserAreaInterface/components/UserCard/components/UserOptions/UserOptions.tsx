import { UserOptionsProps } from "@/components/UserAreaInterface/types";
import { FC } from "react";
import { FaPowerOff } from "react-icons/fa";
import { SubscriptionTag } from "../../../UserStats/components/SubscriptionTag";

const UserOptions: FC<UserOptionsProps> = ({ user, logout, subStatus }) => {
  return (
    <div className="    p-4 ">
      <div className=" flex justify-between gap-3 items-center">
        {user && (
          <>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName ?? "User"}
                className="w-14 h-14 rounded-full"
              />
            )}
            <div className="flex justify-between w-full items-center border-amber-200">
              <div className="cursor-default">
                <div className="flex space-x-2 items-center">
                  <p className="text-lg tracking-wide font-semibold text-[#84e9e4]">
                    {user.displayName ?? "Usuário"}
                  </p>

                  <SubscriptionTag subStatus={subStatus} />
                </div>
                <p className="text-md tracking-wide text-slate-300">
                  {user.email}
                </p>
              </div>
              <div className="flex flex-col items-center hover:opacity-85 cursor-pointer ">
                <FaPowerOff
                  color="#84e9e4"
                  size={18}
                  className="mr-1 w-fit "
                  onClick={logout}
                />
                <div>
                  <span className="tracking-widest text-center text-xs font-semibold text-[#84e9e4]">
                    Sair
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default UserOptions;
