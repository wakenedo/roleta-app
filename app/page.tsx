"use client";
import { AuthInterface } from "@/components/AuthInterface";
import { BannerPromo } from "@/components/BannerPromo";
import { Header } from "@/components/Header";
import { InterfaceSwitch } from "@/components/InterfaceSwitch";
import { Slots } from "@/components/Slots";
import { UserInterface } from "@/components/UserInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useState } from "react";

export default function Home() {
  const { user, logout } = useAuth();
  const [gameTab, setGameTab] = useState<"left" | "right">("left");

  return (
    <>
      <Header user={user} />
      <div className="relative font-sans min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div>
          <main className="flex flex-col justify-between  min-h-screen relative z-10 pt-4">
            <div className="flex flex-col   items-center  mt-10 mx-2">
              <BannerPromo />
              {user != null && (
                <InterfaceSwitch
                  leftLabel="Slots da Sorte"
                  leftComponent={<Slots />}
                  rightLabel="Roleta de Ofertas"
                  rightComponent={<div>Game 2 content</div>}
                  activeSide={gameTab}
                  onToggleChange={(side) => setGameTab(side)}
                />
              )}
              {user === null && <AuthInterface />}
              <div></div>
            </div>
            <div className="z-10 flex sticky-bottom w-full">
              {user != null && <UserInterface user={user} logout={logout} />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
