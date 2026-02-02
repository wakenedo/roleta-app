import { User } from "firebase/auth";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  getToken: (forceRefresh?: boolean) => Promise<string>;
  requireAuth: () => User;
  authorizedFetch: typeof fetch;
}

export type { AuthContextProps };
