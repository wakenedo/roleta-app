"use client";

import Image from "next/image";
import { useState } from "react";
import GIcon from "@/public/google-icon.png";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { ToSModal } from "../ToSModal";
import { UserTermsInterface } from "@/Interfaces/UserTermsInterface";

const GoogleRegisterButton = () => {
  const { registerWithGoogle } = useAuth();

  const [loading, setLoading] = useState(false);
  const [showToS, setShowToS] = useState(false);

  const handleRegisterClick = () => {
    setShowToS(true); // 👈 open modal
  };

  const handleAcceptToS = async () => {
    try {
      setLoading(true);
      setShowToS(false);

      await registerWithGoogle(true); // 👈 always true here
    } catch (err) {
      console.error("❌ Google login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <span className="text-[#84e9e4] font-bold tracking-widest uppercase -mt-2 mb-2">
        Usuários
      </span>
      <div className="border justify-center hover:text-[#84e9e4] text-slate-400 border-slate-600 my-2 mt-3 cursor-pointer group relative flex flex-col items-center rounded-full bg-gradient-to-br from-[#111827] to-[#1f2937]  transition-all duration-300  hover:-translate-y-1  hover:shadow-[0_0_5px_rgba(132,233,228,0.35)]">
        <button
          onClick={handleRegisterClick}
          disabled={loading}
          className="p-1 px-2 rounded-full flex items-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          <Image src={GIcon} alt="google" width={24} height={24} />
          <span>{loading ? "Carregando..." : "Registrar"}</span>
        </button>
        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300  group-hover:opacity-100  bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15  pointer-events-none"></div>
      </div>

      <ToSModal
        title="Usuário"
        termsContent={<UserTermsInterface />}
        open={showToS}
        onClose={() => setShowToS(false)}
        onAccept={handleAcceptToS}
      />
    </>
  );
};

export default GoogleRegisterButton;
