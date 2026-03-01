import { GiFireTail, GiSparkles } from "react-icons/gi";
import { FiZap } from "react-icons/fi";
import { HiShieldCheck } from "react-icons/hi";
import { SellingPointsBackground } from "../SellingPointsBackground";
import { SellingPointCard } from "../SellingPointCard";

const UserSellingPoints = () => {
  return (
    <SellingPointsBackground>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SellingPointCard
          icon={<GiSparkles />}
          title="Giros Diários Gratuitos"
          description="Receba até 5 giros grátis por dia e descubra novas ofertas."
        />

        <SellingPointCard
          icon={<GiFireTail />}
          title="Recompensas Exclusivas"
          description="Desbloqueie jackpots especiais e oportunidades raras."
        />

        <SellingPointCard
          icon={<FiZap />}
          title="Resultados Instantâneos"
          description="Gire e receba sugestões de produtos na hora."
        />

        <SellingPointCard
          icon={<HiShieldCheck />}
          title="Seguro & Transparente"
          description="Todos os giros são registrados e armazenados com segurança."
        />
      </div>
    </SellingPointsBackground>
  );
};

export default UserSellingPoints;
