import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import UserSubscriptionsContent from "@/components/UserSubscriptionsInterface/components/UserSubscriptionsContent/UserSubscriptionsContent";
import { Suspense } from "react";

const UserSubscriptions = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <UserSubscriptionsContent />
      </Suspense>
      <Footer />
    </>
  );
};
export default UserSubscriptions;
