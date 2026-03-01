import { FiDollarSign, FiSettings } from "react-icons/fi";

import { BiBarChart, BiPalette } from "react-icons/bi";
import { SellingPointsBackground } from "../SellingPointsBackground";
import { SellingPointCard } from "../SellingPointCard";

const TenantSellingPoints = () => {
  return (
    <SellingPointsBackground>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SellingPointCard
          icon={<FiDollarSign />}
          title="Monetize Cada Giro"
          description="Gere receita afiliada através de experiências gamificadas envolventes."
        />

        <SellingPointCard
          icon={<BiBarChart />}
          title="Analytics Inteligente"
          description="Acompanhe giros, cotas, jackpots e insights de receita."
        />

        <SellingPointCard
          icon={<BiPalette />}
          title="Controle Total de Marca"
          description="Personalize cores, temas e ofertas para combinar com sua identidade."
        />

        <SellingPointCard
          icon={<FiSettings />}
          title="Configuração Flexível"
          description="Defina cotas, níveis, recompensas e lógica de distribuição."
        />
      </div>
    </SellingPointsBackground>
  );
};

export default TenantSellingPoints;
