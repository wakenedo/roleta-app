"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signOut,
  User,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";
import { auth, gAuthProvider } from "@/firebase";
import { AuthContextProps } from "./types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [acceptedToS, setAcceptedToS] = useState(false);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    if (!auth) return;
    await signOut(auth);
    setUser(null);
  };

  const loginWithGoogle = async () => {
    if (!auth) return;

    try {
      setLoading(true);

      gAuthProvider.setCustomParameters({
        prompt: "select_account",
      });

      await signInWithPopup(auth, gAuthProvider);
    } finally {
      setLoading(false);
    }
  };

  const registerWithGoogle = async (acceptedToS: boolean) => {
    if (!auth) return;

    try {
      setLoading(true);

      gAuthProvider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, gAuthProvider);

      // 🔥 IMPORTANT: persist ToS acceptance
      const token = await result.user.getIdToken();

      await fetch(`${API_URL}/users/acceptToS`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ acceptedToS }),
      });
    } finally {
      setAcceptedToS(acceptedToS);
      setLoading(false);
    }
  };

  const requireAuth = () => {
    if (!user) {
      throw new Error("User is not authenticated");
    }
    return user;
  };

  const getToken = async (forceRefresh = false) => {
    const currentUser = requireAuth();

    try {
      return await getIdToken(currentUser, forceRefresh);
    } catch (err) {
      console.error("Failed to retrieve ID token", err);
      throw new Error("AUTH_TOKEN_ERROR");
    }
  };

  const authorizedFetch = async (
    input: RequestInfo | URL,
    init: RequestInit = {},
  ) => {
    const token = await getToken();

    const { getTenantId } = await import("@/context/TenantContext/utils");

    return fetch(input, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
        "x-tenant-id": getTenantId() as string,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        acceptedToS,
        logout,
        getToken,
        requireAuth,
        loginWithGoogle,
        registerWithGoogle,
        authorizedFetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};
