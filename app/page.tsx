"use client";
import { AuthInterface } from "@/components/AuthInterface";
import { Header } from "@/components/Header";
import { UserInterface } from "@/components/UserInterface";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { user, logout } = useAuth();

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
          <main className="flex flex-col justify-between  min-h-screen relative z-10 pt-10">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-50">
              {user === null && <AuthInterface />}
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
