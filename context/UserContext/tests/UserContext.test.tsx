import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react";
import { UserProvider, useUser } from "../UserContext";
import { SpinQuota, UserState } from "../types";

// ---- MOCK useAuth ----
jest.mock("@/context/AuthContext/AuthContext", () => ({
  useAuth: jest.fn(),
}));

import { useAuth } from "@/context/AuthContext/AuthContext";

const mockAuthorizedFetch = jest.fn();

const fakeUser = {
  uid: "123",
  email: "test@test.com",
};

const mockBackendUser: UserState = {
  user: {
    id: "123",
    email: "test@test.com",
    name: "Test User",
    photoURL: null,
    createdAt: null,
    subscription: "free",
  },
  quota: {
    spins: {
      used: 1,
      remaining: 4,
      limit: 5,
      resetsAt: "2026-01-01",
    },
  },
  stats: {
    totalSpins: 10,
    totalRewards: 2,
    jackpots: 0,
    rare: 0,
    common: 0,
  },
  historyPreview: [],
  rewards: [],
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <UserProvider>{children}</UserProvider>
);

describe("UserContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("throws if used outside UserProvider", () => {
    expect(() => renderHook(() => useUser())).toThrow(
      "useUser must be used within UserProvider",
    );
  });

  it("does not fetch user data if not authenticated", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: null,
      authorizedFetch: mockAuthorizedFetch,
      loading: false,
    });

    const { result } = renderHook(() => useUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toBeNull();
    });

    expect(mockAuthorizedFetch).not.toHaveBeenCalled();
  });

  it("fetches /users/me when user is authenticated", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: fakeUser,
      authorizedFetch: mockAuthorizedFetch,
      loading: false,
    });

    mockAuthorizedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockBackendUser,
    });

    const { result } = renderHook(() => useUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(mockBackendUser);
    });

    expect(mockAuthorizedFetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
    );
  });

  it("sets error when /users/me request fails", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: fakeUser,
      authorizedFetch: mockAuthorizedFetch,
      loading: false,
    });

    mockAuthorizedFetch.mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.error).toBe("Failed to load user data");
    });

    expect(result.current.data).toBeNull();
  });

  it("optimisticSpin updates quota and totalSpins", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: fakeUser,
      authorizedFetch: mockAuthorizedFetch,
      loading: false,
    });

    mockAuthorizedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockBackendUser,
    });

    const { result } = renderHook(() => useUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).not.toBeNull();
    });

    const newQuota: SpinQuota = {
      used: 2,
      remaining: 3,
      limit: 5,
      resetsAt: "2026-01-01",
    };

    act(() => {
      result.current.optimisticSpin(newQuota);
    });

    expect(result.current.data?.quota.spins).toEqual(newQuota);
    expect(result.current.data?.stats.totalSpins).toBe(11);
  });

  it("refresh re-fetches user data", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: fakeUser,
      authorizedFetch: mockAuthorizedFetch,
      loading: false,
    });

    mockAuthorizedFetch.mockResolvedValue({
      ok: true,
      json: async () => mockBackendUser,
    });

    const { result } = renderHook(() => useUser(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(mockBackendUser);
    });

    act(() => {
      result.current.refresh();
    });

    await waitFor(() => {
      expect(mockAuthorizedFetch).toHaveBeenCalledTimes(2);
    });
  });
});
