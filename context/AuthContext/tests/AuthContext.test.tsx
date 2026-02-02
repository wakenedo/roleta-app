import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "../AuthContext";

import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

/* ------------------------------------------------------------------
 * Mocks
 * ------------------------------------------------------------------ */
jest.mock("firebase/auth");
jest.mock("@/firebase", () => ({
  auth: {}, // must be truthy
  gAuthProvider: {},
}));

/* ------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------ */
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("AuthContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* ------------------------------------------------------------
   * Initial state
   * ------------------------------------------------------------ */
  it("initially sets loading to true", () => {
    (onAuthStateChanged as jest.Mock).mockImplementation(() => jest.fn());

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.loading).toBe(true);
    expect(result.current.user).toBeNull();
  });

  /* ------------------------------------------------------------
   * Auth state subscription
   * ------------------------------------------------------------ */
  it("sets user when onAuthStateChanged fires", async () => {
    const fakeUser = { uid: "123", email: "test@test.com" };

    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      setTimeout(() => callback(fakeUser), 0);
      return jest.fn();
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    await waitFor(() => {
      expect(result.current.user).toEqual(fakeUser);
    });

    expect(result.current.loading).toBe(false);
  });

  /* ------------------------------------------------------------
   * requireAuth
   * ------------------------------------------------------------ */
  it("requireAuth throws if user is null", () => {
    (onAuthStateChanged as jest.Mock).mockImplementation(() => jest.fn());

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(() => result.current.requireAuth()).toThrow(
      "User is not authenticated",
    );
  });

  /* ------------------------------------------------------------
   * getToken
   * ------------------------------------------------------------ */
  it("getToken returns token when authenticated", async () => {
    const fakeUser = { uid: "123" };
    (getIdToken as jest.Mock).mockResolvedValue("FAKE_TOKEN");

    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      setTimeout(() => callback(fakeUser), 0);
      return jest.fn();
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    const token = await waitFor(async () => {
      return await result.current.getToken();
    });

    expect(token).toBe("FAKE_TOKEN");
    expect(getIdToken).toHaveBeenCalledWith(fakeUser, false);
  });

  /* ------------------------------------------------------------
   * authorizedFetch
   * ------------------------------------------------------------ */
  it("authorizedFetch injects Authorization header", async () => {
    const fakeUser = { uid: "123" };
    (getIdToken as jest.Mock).mockResolvedValue("FAKE_TOKEN");

    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      setTimeout(() => callback(fakeUser), 0);
      return jest.fn();
    });

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    }) as jest.Mock;

    const { result } = renderHook(() => useAuth(), { wrapper });

    await waitFor(async () => {
      await result.current.authorizedFetch("/secure-endpoint");
    });

    expect(fetch).toHaveBeenCalledWith("/secure-endpoint", {
      headers: {
        Authorization: "Bearer FAKE_TOKEN",
      },
    });
  });

  /* ------------------------------------------------------------
   * logout
   * ------------------------------------------------------------ */
  it("logout signs out and clears user", async () => {
    const fakeUser = { uid: "123" };

    (onAuthStateChanged as jest.Mock).mockImplementation((_auth, callback) => {
      setTimeout(() => callback(fakeUser), 0);
      return jest.fn();
    });

    const { result } = renderHook(() => useAuth(), { wrapper });

    await waitFor(() => {
      expect(result.current.user).not.toBeNull();
    });

    await act(async () => {
      await result.current.logout();
    });

    expect(signOut).toHaveBeenCalled();
    expect(result.current.user).toBeNull();
  });

  /* ------------------------------------------------------------
   * loginWithGoogle
   * ------------------------------------------------------------ */
  it("loginWithGoogle calls Firebase popup", async () => {
    (onAuthStateChanged as jest.Mock).mockImplementation(() => jest.fn());

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await result.current.loginWithGoogle();
    });

    expect(signInWithPopup).toHaveBeenCalled();
  });
});
