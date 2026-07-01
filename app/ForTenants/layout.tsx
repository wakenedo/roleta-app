import type { Metadata } from "next";
import "../globals.css";
import { AuthProvider } from "@/context/AuthContext/AuthContext";
import { TenantAuthProvider } from "@/context/TenantAuthContext/TenantAuthContext";
import { UserProvider } from "@/context/UserContext/UserContext";
import { TenantProvider } from "@/context/TenantContext/TenantContext";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Promobet",
  description: "Monetize sua audiência através dos nossos jogos",
};

export default function ForTenantsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <TenantAuthProvider>
        <UserProvider>
          <TenantProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </TenantProvider>
        </UserProvider>
      </TenantAuthProvider>
    </AuthProvider>
  );
}
