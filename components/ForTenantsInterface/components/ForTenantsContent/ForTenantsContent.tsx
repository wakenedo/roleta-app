"use client";

import { useSearchParams } from "next/navigation";
import { ForTenantsInterface } from "@/components/ForTenantsInterface";

const ForTenantsContent = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");

  return <ForTenantsInterface planId={planId} />;
};

export default ForTenantsContent;
