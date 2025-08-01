"use client";
import Image from "next/image";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import GIcon from "@/public/google-icon.png";
import { auth, gAuthProvider } from "@/firebase";

const GoogleButton = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      if (typeof window !== "undefined" && auth) {
        const result = await signInWithPopup(auth, gAuthProvider);
        const user = result.user;
        console.log("✅ Google login success:", user);
        // Optional: send user token to your backend
      }
    } catch (error) {
      console.error("❌ Google login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="p-2 rounded-full border border-slate-400 flex items-center gap-2 cursor-pointer"
    >
      <Image src={GIcon} alt="google" width={24} height={24} />
      <span>{loading ? "Carregando..." : "Entrar com Google"}</span>
    </div>
  );
};

export default GoogleButton;
