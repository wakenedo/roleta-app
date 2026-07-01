"use client";
import { GoldCoin } from "@/components/ArtAssets/GoldCoin";
import { SilverCoin } from "@/components/ArtAssets/SilverCoin";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { useAuth } from "@/context/AuthContext/AuthContext";
import { useTenant } from "@/context/TenantContext/TenantContext";
import { Tenant } from "@/context/TenantContext/types";
import { useUser } from "@/context/UserContext/UserContext";
import { useSeasonLeaderboard } from "@/hooks/useSeasonLeaderboard";
import { useTenants } from "@/hooks/useTenants";
import { HomePageInterface } from "@/Interfaces/HomePageInterface";
import { mergeTenantsWithLeaderboard } from "@/Interfaces/HomePageInterface/components/UserOnlineHomePage/components/PopularTenants/utils";
import { useRouter } from "next/navigation";

import { JSX, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const { data } = useUser();
  const { tenant } = useTenant();
  const {
    tenants,
    loading: tenantsLoading,
    error: tenantsError,
    search,
    setSearch,
  } = useTenants();
  const { data: seasonLeaderboardData, leaderboardLoading } =
    useSeasonLeaderboard(50);

  const mergedTenants = mergeTenantsWithLeaderboard(
    tenants,
    seasonLeaderboardData,
  );

  const coinsArt = [
    <GoldCoin key="gold-coin" />,
    <SilverCoin key="silver-coin" />,
  ];

  const sorted = mergedTenants.sort(
    (a, b) => (b.ranking?.score ?? 0) - (a.ranking?.score ?? 0),
  );
  //const mockedTenants = mockTenants;

  const [onToggleChange, setOnToggleChange] = useState(
    "left" as "left" | "right",
  );
  const handleToggle = (side: "left" | "right") => {
    setOnToggleChange(side);
  };
  const CURRENT_USER_PLAN = data?.user.subscription;
  const userMaxedPlan = data?.user.subscription === "premium+";
  const CURRENT_TENANT_PLAN = tenant?.subscriptionMode;
  const tenantMaxedPlan = tenant?.subscriptionMode === "tenantPremium";
  const primaryColor = tenant?.branding?.primaryColor || "#111";

  const [mounted, setMounted] = useState(false);
  const [confetti, setConfetti] = useState<number[]>([]);
  const [coins, setCoins] = useState<JSX.Element[]>([]);
  const [selectedPopularTenant, setSelectedPopularTenant] =
    useState<Tenant | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // For now: simple popularity logic
  // Later this can come from backend (recommended)
  const popularTenants = useMemo(() => {
    return [...tenants]
      .sort((a, b) => {
        const aCooldown = a.settings?.cooldownMs ?? 3000;
        const bCooldown = b.settings?.cooldownMs ?? 3000;

        // Lower cooldown = more engaging = more popular (temporary heuristic)
        return aCooldown - bCooldown;
      })
      .slice(0, 6);
  }, [tenants]);

  const featuredTenant = popularTenants[0] || null;

  function resolveTenantQuota(subscription?: string): number {
    switch (subscription) {
      case "tenant":
        return 10;

      case "tenantPro":
        return 20;

      case "tenantPremium":
        return 40;

      default:
        return 10; // fallback safety
    }
  }

  const filtered = tenants.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectedCardClick = () => {
    router.push(`/${tenant?.id}/slots`);
  };

  const handleTenantCardClick = () => {
    router.push(`/tenant/${tenant?.id}`);
  };

  const handleUserSubscribe = (planId: string) => {
    console.log("*Homepage Subscribe to:", planId);
    router.push(`/UserSubscriptions?plan=${encodeURIComponent(planId)}`);
  };

  useEffect(() => {
    setMounted(true);

    const width = containerRef.current?.offsetWidth || 4400;
    const positions = Array.from({ length: 40 }, () => Math.random() * width);

    setConfetti(positions);
    setCoins((prev) => [...prev, ...coinsArt]);
  }, []);
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-amber-500 to-[#84e9e4]">
        <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
          <HomePageInterface
            leaderboardLoading={leaderboardLoading}
            search={search}
            coins={coins}
            confetti={confetti}
            currentTenantPlan={CURRENT_TENANT_PLAN}
            currentUserPlan={CURRENT_USER_PLAN}
            featuredTenant={featuredTenant}
            filtered={filtered}
            handleSelectedCardClick={handleSelectedCardClick}
            handleToggle={handleToggle}
            handleUserSubscribe={handleUserSubscribe}
            mounted={mounted}
            onToggleChange={onToggleChange}
            primaryColor={primaryColor}
            resolveTenantQuota={resolveTenantQuota}
            selectedPopularTenant={selectedPopularTenant}
            setSearch={setSearch}
            setSelectedPopularTenant={setSelectedPopularTenant}
            sorted={sorted}
            tenantsLoading={tenantsLoading}
            tenantMaxedPlan={tenantMaxedPlan}
            tenantsError={tenantsError}
            user={user}
            userMaxedPlan={userMaxedPlan}
            containerRef={containerRef}
            popularTenants={popularTenants}
            tenant={tenant}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
