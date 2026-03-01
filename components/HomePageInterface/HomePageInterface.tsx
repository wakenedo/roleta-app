import { User } from "firebase/auth";
import { UserOfflineHomePage } from "./components/UserOfflineHomePage";
import { UserOnlineHomePage } from "./components/UserOnlineHomePage";

const HomePageInterface = ({ user }: { user: User | null }) => {
  return (
    <>
      {user === null && <UserOfflineHomePage />}
      {user != null && <UserOnlineHomePage />}
    </>
  );
};
export default HomePageInterface;
