import { useTenantAuth } from "@/context/TenantAuthContext/TenantAuthContext";
import { useState } from "react";

const TenantLoginInterface = () => {
  const { tenantLogin } = useTenantAuth();
  const [loading, setLoading] = useState(false);
  const [tenantEmail, setTenantEmail] = useState<string>();
  const [tenantPassword, setTenantPassword] = useState<string>();

  const handleTenantLogin = async () => {
    try {
      setLoading(true);
      await tenantLogin(tenantEmail, tenantPassword);
    } catch (err) {
      console.error("❌ Tenant login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setTenantEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setTenantPassword(e.target.value)}
      />
      <button
        onClick={handleTenantLogin}
        disabled={loading}
        className="p-1 px-2  rounded-full border border-slate-400 flex items-center gap-2 cursor-pointer disabled:opacity-60"
      >
        <span>{loading ? "Carregando..." : "Login Parceiro"}</span>
      </button>
    </>
  );
};
export default TenantLoginInterface;
