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
    <div className="w-full ">
      <div className="-mt-2 mb-2">
        <span className="text-[#84e9e4] font-bold tracking-widest uppercase">
          Parceiros
        </span>
      </div>
      <div className="space-y-6 pb-4">
        <div className=" flex flex-col">
          <input
            type="text"
            inputMode="email"
            placeholder="E-mail"
            className="bg-transparent border-b border-slate-400 text-slate-400 p-1 italic "
            onChange={(e) => setTenantEmail(e.target.value)}
          />
        </div>
        <div className=" flex flex-col">
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-b border-slate-400 text-slate-400 p-1 italic"
            onChange={(e) => setTenantPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="mb-5 mt-4 cursor-default group relative flex flex-col items-center rounded-full bg-gradient-to-br from-[#111827] to-[#1f2937]  transition-all duration-300  hover:-translate-y-1  hover:shadow-[0_0_5px_rgba(132,233,228,0.35)]">
          <button
            onClick={handleTenantLogin}
            disabled={loading}
            className="p-1 px-2 w-full hover:text-[#84e9e4] text-slate-400    rounded-full border border-slate-600   cursor-pointer disabled:opacity-60 text-center"
          >
            <span>{loading ? "Carregando..." : "Entrar"}</span>
          </button>
          <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300  group-hover:opacity-100  bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15  pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
export default TenantLoginInterface;
