import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomePageInterface } from "@/components/HomePageInterface";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-amber-500 to-[#84e9e4]">
        <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
          <HomePageInterface />
        </main>
      </div>
      <Footer />
    </>
  );
}
