"use client";
import { useSearchParams } from "next/navigation";
import UserSubscriptionsInterface from "../../UserSubscriptionsInterface";

const UserSubscriptionsContent = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  return <UserSubscriptionsInterface planId={planId} />;
};
export default UserSubscriptionsContent;
