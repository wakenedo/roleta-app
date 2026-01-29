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

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  getToken: (forceRefresh?: boolean) => Promise<string>;
  requireAuth: () => User;
  authorizedFetch: typeof fetch;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
    await signInWithPopup(auth, gAuthProvider);
    // user state will update via onAuthStateChanged
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

    return fetch(input, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        getToken,
        requireAuth,
        loginWithGoogle,
        authorizedFetch
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
