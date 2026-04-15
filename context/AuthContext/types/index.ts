import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  acceptedToS: boolean;
  loginWithGoogle: () => Promise<void>;
  registerWithGoogle: (acceptedToS: boolean) => Promise<void>;
  logout: () => Promise<void>;
  getToken: (forceRefresh?: boolean) => Promise<string | undefined>;
  requireAuth: () => User | null;
  authorizedFetch: typeof fetch;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export type { AuthContextProps };
