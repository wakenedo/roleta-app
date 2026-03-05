import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";

const UserPremiumPlus = ({ planId }: { planId: string | null }) => {
  return (
    <AreaBackground>
      <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
        <div>
          <h2>{planId}</h2>
          PREMIUM + subscription pipeline
        </div>
      </main>
    </AreaBackground>
  );
};
export default UserPremiumPlus;
