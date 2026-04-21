"use client";

import Image from "next/image";
import { useState } from "react";
import GIcon from "@/public/google-icon.png";
import { useAuth } from "@/context/AuthContext/AuthContext";

const GoogleButton = () => {
  const { loginWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await loginWithGoogle();
    } catch (err) {
      console.error("❌ Google login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="-mt-2 mb-2">
        <span className="text-[#84e9e4] font-bold tracking-widest uppercase">
          Usuários
        </span>
      </div>
      <div className="border hover:text-[#84e9e4] text-slate-400 border-slate-600 my-2 mt-3 cursor-default group relative flex flex-col items-center rounded-full bg-gradient-to-br from-[#111827] to-[#1f2937]  transition-all duration-300  hover:-translate-y-1  hover:shadow-[0_0_5px_rgba(132,233,228,0.35)]">
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="p-1 px-2   rounded-full  flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          <Image src={GIcon} alt="google" width={24} height={24} />
          <span>{loading ? "Carregando..." : "Entrar"}</span>
        </button>
        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300  group-hover:opacity-100  bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15  pointer-events-none"></div>
      </div>
    </>
  );
};

export default GoogleButton;
