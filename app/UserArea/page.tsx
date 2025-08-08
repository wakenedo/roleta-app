"use client";
import { BannerPromo } from "@/components/BannerPromo";
import { Header } from "@/components/Header";
import { useAuth } from "@/context/AuthContext/AuthContext";

const UserArea = () => {
  const { user } = useAuth();

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
              <div></div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default UserArea;
