"use client";
import { Slots } from "@/components/Slots";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { useParams } from "next/navigation";

export default function TenantSlotsPage() {
  const { tenant, loading, error, products } = useTenant();
  const { tenantId } = useParams();
  if (!products) return;
  if (!tenant) return;
  if (tenantId != tenant.id) return;

  const paramTenantId = tenantId;

  console.log("tenant", tenantId);

  console.log("tenant products", products);
  return (
    <>
      <div>{tenant.id}</div>
      <Slots tenantId={paramTenantId} />;
    </>
  );
}
