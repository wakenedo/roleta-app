"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { TenantAuthContextProps, TenantMeResponse } from "./types";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuth } from "../AuthContext/AuthContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const TenantAuthContext = createContext<TenantAuthContextProps | undefined>(
  undefined,
);

export const TenantAuthProvider = ({ children }: { children: ReactNode }) => {
  const { setUser } = useAuth();
  const [tenantId, setTenantId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tenantId");
    }
    return null;
  });

  /**
   * 🔥 Get Firebase token dynamically
   */
  const getAuthToken = async () => {
    if (!auth.currentUser) return null;

    return await auth.currentUser.getIdToken();
  };

  /**
   * ✅ Register tenant (AFTER email verified)
   */
  const tenantRegister = async (name: string, planId: string) => {
    const token = await getAuthToken();

    if (!token) throw new Error("User not authenticated");

    const res = await fetch(`${API_URL}/tenants/auth/register`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        planId,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Tenant registration failed");
    }

    const json = await res.json();

    setTenantId(json.tenantId);
    localStorage.setItem("tenantId", json.tenantId);

    return json;
  };

  const tenantMe = async (): Promise<TenantMeResponse | null | undefined> => {
    try {
      const res = await tenantFetch(`/tenants/auth/me`);

      if (!res.ok) {
        if (res.status === 404) return null; // no tenant yet
        return undefined; // ⚠️ don't throw
      }

      return await res.json();
    } catch (err) {
      console.warn("tenantMe soft error:", err);
      return undefined; // ⚠️ important
    }
  };

  const tenantLogin = async (email: string, password: string) => {
    // 1. Firebase login
    const cred = await signInWithEmailAndPassword(auth, email, password);

    // 2. Force fresh token (important)
    await cred.user.getIdToken(true);

    // 3. Resolve tenant
    const me = await tenantMe();

    console.log("tenantMe response", me);

    if (!me) {
      throw new Error("This account is not a tenant");
    }

    // 4. Persist tenantId
    setTenantId(me.tenantId);
    localStorage.setItem("tenantId", me.tenantId);

    return me;
  };

  /**
   * ✅ Generic fetch with Firebase token
   */
  const tenantFetch = async (path: string, options: RequestInit = {}) => {
    const token = await getAuthToken();

    const isFormData = options.body instanceof FormData;

    return fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
    });
  };

  const tenantLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    localStorage.removeItem("tenantId");
    setTenantId(null);
    setUser(null);
  };

  return (
    <TenantAuthContext.Provider
      value={{
        sessionTenantId: tenantId,
        tenantLogin,
        tenantRegister,
        tenantLogout,
        tenantFetch,
        tenantMe,
      }}
    >
      {children}
    </TenantAuthContext.Provider>
  );
};

export const useTenantAuth = () => {
  const ctx = useContext(TenantAuthContext);
  if (!ctx)
    throw new Error("useTenantAuth must be used within TenantAuthProvider");
  return ctx;
};
