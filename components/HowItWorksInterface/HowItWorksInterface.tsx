import { SectionTitle } from "../ForTenantsInterface/components/TenantHowItWorksInterface/components/SectionTitle";
import { UserSubscriptionModes } from "../HomePageInterface/components/UserSubscriptionModes";
import { CoreLoopInterface } from "./components/CoreLoopInterface";
import { DetailsInterface } from "./components/DetailsInterface";

const HowItWorksInterface = ({
  currentUserPlan,
  handleUserSubscribe,
  userMaxedPlan,
}: {
  currentUserPlan: string | undefined;
  handleUserSubscribe: (planId: string) => void;
  userMaxedPlan: boolean;
}) => {
  const title = "COMO FUNCIONA";
  const subTitle = "Uma nova forma de descobrir produtos, jogando!";
  return (
    <>
      <main className="flex flex-col items-center min-h-screen relative z-10">
        <SectionTitle title={title} subTitle={subTitle} />
        <div className="flex max-w-5xl pt-10 space-x-2 justify-center">
          <CoreLoopInterface />
          <DetailsInterface />
        </div>
      </main>
      <UserSubscriptionModes
        currentUserPlan={currentUserPlan}
        handleUserSubscribe={handleUserSubscribe}
        userMaxedPlan={userMaxedPlan}
      />
    </>
  );
};
export default HowItWorksInterface;
