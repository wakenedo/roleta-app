import { Footer } from "@/components/Footer";
import { GamesPageInterface } from "@/components/GamesPageInterface";
import { Header } from "@/components/Header";
import { AreaBackground } from "@/components/HomePageInterface/components/UserOfflineHomePage/components/AreaBackground";

const Games = () => {
  return (
    <>
      <Header />
      <AreaBackground>
        <GamesPageInterface />
      </AreaBackground>
      <Footer />
    </>
  );
};
export default Games;
