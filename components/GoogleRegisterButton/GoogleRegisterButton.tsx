"use client";

import Image from "next/image";
import { useState } from "react";
import GIcon from "@/public/google-icon.png";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { ToSModal } from "../ToSModal";

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
      <button
        onClick={handleRegisterClick}
        disabled={loading}
        className="p-1 px-2 justify-center rounded-full border border-slate-400 flex items-center gap-2 disabled:opacity-60"
      >
        <Image src={GIcon} alt="google" width={24} height={24} />
        <span>{loading ? "Carregando..." : "Registrar"}</span>
      </button>

      <ToSModal
        open={showToS}
        onClose={() => setShowToS(false)}
        onAccept={handleAcceptToS}
      />
    </>
  );
};

export default GoogleRegisterButton;
