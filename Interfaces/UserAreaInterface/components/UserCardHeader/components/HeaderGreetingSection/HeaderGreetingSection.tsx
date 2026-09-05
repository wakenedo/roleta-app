import { FaPowerOff } from "react-icons/fa";
import { HeaderAdvancedSettings } from "../HeaderAdvancedSettings";
import { SubscriptionTag } from "./components/SubscriptionTag";

const HeaderGreetingSection = ({
  setActiveModal,
  logout,
  userName,
  userPhotoURL,
  userEmail,
  subStatus,
}: {
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
  logout: () => void;
  userName: string;
  userPhotoURL: string | null | undefined;
  userEmail: string | null | undefined;
  subStatus: string | undefined;
}) => {
  return (
    <div className="flex justify-between items-center px-1 mx-1 py-1 ">
      <div className="flex flex-col ">
        <div className=" p-4 ">
          <div className=" flex justify-between gap-3 items-center mb-5">
            <>
              {userPhotoURL && (
                <img
                  src={userPhotoURL}
                  alt={userName ?? "User"}
                  className="w-14 h-14 rounded-full"
                />
              )}
              <div className="flex justify-between w-full items-center ">
                <div className="cursor-default">
                  <div className="flex space-x-2 items-center">
                    <p className="text-lg tracking-wide font-semibold text-amber-500">
                      {userName ?? "Usuário"}
                    </p>

                    <SubscriptionTag subStatus={subStatus} />
                  </div>
                  <p className="text-md tracking-wide text-slate-700">
                    {userEmail}
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
        <HeaderAdvancedSettings setActiveModal={setActiveModal} />
      </div>
      <div className=" mr-1 flex flex-col items-center text-red-400 hover:text-red-600 transition cursor-pointer ">
        <FaPowerOff size={18} className="mr-1 w-fit  " onClick={logout} />
        <div>
          <span className="tracking-widest text-center text-xs font-semibold ">
            Sair
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeaderGreetingSection;
