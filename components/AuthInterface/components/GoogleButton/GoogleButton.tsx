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
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="p-2 my-2 rounded-full border border-slate-400 flex items-center gap-2 cursor-pointer disabled:opacity-60"
    >
      <Image src={GIcon} alt="google" width={24} height={24} />
      <span>{loading ? "Carregando..." : "Entrar com Google"}</span>
    </button>
  );
};

export default GoogleButton;
