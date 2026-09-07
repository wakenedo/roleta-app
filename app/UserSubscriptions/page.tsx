import { UserSubscriptionsClient } from "@/Interfaces/UserSubscriptionsInterface/components/UserSubscriptionsClient";
import { Suspense } from "react";

export default function UserSubscriptions() {
  return (
    <Suspense fallback={null}>
      <UserSubscriptionsClient />
    </Suspense>
  );
}
