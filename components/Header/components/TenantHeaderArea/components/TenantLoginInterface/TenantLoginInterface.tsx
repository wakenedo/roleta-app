"use client";
import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TenantLoginInterface = () => {
  const router = useRouter();
  const { tenantLogin } = useTenantAuth();
  const [loading, setLoading] = useState(false);
  const [tenantEmail, setTenantEmail] = useState<string>("");
  const [tenantPassword, setTenantPassword] = useState<string>("");

  const handleTenantLogin = async () => {
    try {
      setLoading(true);
      await tenantLogin(tenantEmail, tenantPassword);
    } catch (err) {
      console.error("❌ Tenant login failed:", err);
    } finally {
      setLoading(false);
    }
    router.push("/TenantArea");
  };

  return (
    <div className="w-full space-y-2">
      <div className=" flex flex-col">
        <span className="text-xs">Email</span>
        <input
          type="text"
          placeholder="E-mail Parceiro"
          className="bg-slate-100 text-slate-800 p-1 italic"
          onChange={(e) => setTenantEmail(e.target.value)}
        />
      </div>
      <div className=" flex flex-col">
        <span className="text-xs">Password</span>
        <input
          type="text"
          placeholder="Password Parceiro"
          className="bg-slate-100 text-slate-800 p-1 italic"
          onChange={(e) => setTenantPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleTenantLogin}
        disabled={loading}
        className="p-1 px-2 w-full my-2 rounded-full border border-slate-400   cursor-pointer disabled:opacity-60 text-center"
      >
        <span>{loading ? "Carregando..." : "Entrar"}</span>
      </button>
    </div>
  );
};
export default TenantLoginInterface;
