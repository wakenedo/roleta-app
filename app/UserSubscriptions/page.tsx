"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { UserSubscriptionsInterface } from "@/components/UserSubscriptionsInterface";
import { useSearchParams } from "next/navigation";

const UserSubscriptions = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  return (
    <>
      <Header />
      <UserSubscriptionsInterface planId={planId} />
      <Footer />
    </>
  );
};
export default UserSubscriptions;
