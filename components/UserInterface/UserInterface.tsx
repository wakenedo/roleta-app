import { User } from "@firebase/auth";
import Image from "next/image";
import { FaPowerOff } from "react-icons/fa";

interface UserInterfaceProps {
  user: User;
  logout: () => Promise<void>;
}

const UserInterface: React.FC<UserInterfaceProps> = ({ user, logout }) => {
  const userPhoto = user.photoURL;
  const userName = user.displayName;
  return (
    <div className="p-2 shadow-lg m-2 bg-slate-800 rounded w-full ">
      <div className="md:cursor-pointer flex justify-between p-2 items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={userPhoto as string}
            alt="user"
            width={45}
            height={45}
            className="rounded-full shadow-lg"
          />
          <div className="ml-1 flex-col text-slate-300">
            <div>
              <span className="text-xl font-light">{userName}</span>
            </div>
            <div className="-mt-1">
              <span className="text-xs font-light">{user.email}</span>
            </div>
          </div>
        </div>
        <FaPowerOff
          color="#cad5e2"
          size={14}
          className="mr-1 w-fit"
          onClick={logout}
        />
      </div>
      <div className="border-t border-slate-600" />
    </div>
  );
};
export default UserInterface;
