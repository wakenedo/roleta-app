"use client";
import { FAQInterface } from "@/components/FAQInterface";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";

const FAQ = () => {
  const { user } = useAuth();
  const { tenant } = useTenant();
  return (
    <>
      <Header user={user} tenantId={tenant?.id} />

      <FAQInterface />

      <Footer />
    </>
  );
};
export default FAQ;
