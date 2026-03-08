"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { RegisterTenant } from "../TenantContext/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface TenantAuthContextProps {
  tenantToken: string | null;
  tenantLogin: (
    email: string | undefined,
    password: string | undefined,
  ) => Promise<void>;
  tenantRegister: (
    name: string,
    email: string,
    password: string,
    planId: string,
  ) => Promise<RegisterTenant>;

  tenantLogout: () => void;
  tenantFetch: (url: string, options?: RequestInit) => Promise<Response>;
}

const TenantAuthContext = createContext<TenantAuthContextProps | undefined>(
  undefined,
);

export const TenantAuthProvider = ({ children }: { children: ReactNode }) => {
  const [tenantToken, setTenantToken] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tenantToken");
    }
    return null;
  });

  const tenantLogin = async (
    email: string | undefined,
    password: string | undefined,
  ) => {
    const res = await fetch(`${API_URL}/tenants/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Tenant login failed");
    }

    const json = await res.json();

    setTenantToken(json.token);
    localStorage.setItem("tenantToken", json.token);
  };

  const tenantRegister = async (
    name: string,
    email: string,
    password: string,
    planId: string,
  ) => {
    const res = await fetch(`${API_URL}/tenants/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        planId,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Tenant registration failed");
    }

    const json = await res.json();

    setTenantToken(json.token);
    localStorage.setItem("tenantToken", json.token);

    return json;
  };

  const tenantLogout = () => {
    setTenantToken(null);
    localStorage.removeItem("tenantToken");
  };

  const tenantFetch = async (url: string, options: RequestInit = {}) => {
    if (!tenantToken) throw new Error("No tenant token");

    return fetch(`${API_URL}${url}`, {
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: `Bearer ${tenantToken}`,
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <TenantAuthContext.Provider
      value={{
        tenantToken,
        tenantLogin,
        tenantRegister,
        tenantLogout,
        tenantFetch,
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
