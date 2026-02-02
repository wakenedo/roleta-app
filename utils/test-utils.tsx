import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { AuthProvider } from "@/context/AuthContext/AuthContext";

export const renderWithAuth = (ui: ReactNode) =>
  render(<AuthProvider>{ui}</AuthProvider>);
