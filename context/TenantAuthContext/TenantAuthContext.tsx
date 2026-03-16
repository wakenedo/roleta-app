"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { TenantAuthContextProps } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
  const [tenantId, setTenantId] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tenantId");
    }
    return null;
  });

  const tenantLogin = async (email: string, password: string) => {
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
    setTenantId(json.tenantId);
    localStorage.setItem("tenantToken", json.token);
    localStorage.setItem("tenantId", json.tenantId);
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
    setTenantId(json.tenantId);
    localStorage.setItem("tenantToken", json.token);
    localStorage.setItem("tenantId", json.tenantId);
    return json;
  };

  const tenantLogout = () => {
    setTenantToken(null);
    setTenantId(null);
    localStorage.removeItem("tenantToken");
    localStorage.removeItem("tenantId");
  };

  const tenantFetch = async (path: string, options: RequestInit = {}) => {
    return fetch(`${API_URL}${path}`, {
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
        sessionTenantId: tenantId,
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
