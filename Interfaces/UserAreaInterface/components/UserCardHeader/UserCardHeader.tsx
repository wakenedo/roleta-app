import { Dispatch, SetStateAction } from "react";
import { HeaderGreetingSection } from "./components/HeaderGreetingSection";
import { HeaderSectionTab } from "./components/HeaderSectionTab";

const UserCardHeader = ({
  userName,
  userEmail,
  userPhotoURL,
  subStatus,
  activeTab,
  setActiveModal,
  setActiveTab,
  logout,
}: {
  setActiveModal: (modal: "advanced" | "bug" | "suggestion" | null) => void;
  setActiveTab: Dispatch<
    SetStateAction<"general" | "visited" | "spin-history" | "trophies">
  >;
  activeTab: "general" | "visited" | "spin-history" | "trophies";
  logout: () => void;
  userName: string;
  subStatus: string | undefined;
  userPhotoURL: string | null | undefined;
  userEmail: string | null | undefined;
}) => {
  return (
    <div className=" bg-white/90 backdrop-blur rounded-tr-2xl ">
      <HeaderGreetingSection
        userName={userName}
        userEmail={userEmail}
        userPhotoURL={userPhotoURL}
        subStatus={subStatus}
        setActiveModal={setActiveModal}
        logout={logout}
      />
      <HeaderSectionTab activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
export default UserCardHeader;
