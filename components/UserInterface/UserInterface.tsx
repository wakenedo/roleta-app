import { User } from "@firebase/auth";
import Image from "next/image";

interface UserInterfaceProps {
  user: User;
  logout: () => Promise<void>;
}

const UserInterface: React.FC<UserInterfaceProps> = ({ user, logout }) => {
  console.log(user);
  const userPhoto = user.photoURL;
  return (
    <div>
      <div>
        <Image
          src={userPhoto as string}
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div onClick={logout}>Logout</div>
      </div>
      <div>{user.displayName}</div>
      <div>{user.email}</div>
      <div>{user.phoneNumber}</div>
    </div>
  );
};
export default UserInterface;
