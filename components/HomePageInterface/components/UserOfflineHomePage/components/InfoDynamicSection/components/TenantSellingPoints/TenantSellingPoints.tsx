import { FiDollarSign, FiSettings } from "react-icons/fi";
import { SellingPointCard } from "../SellingPointCard";
import { SellingPointsBackground } from "../SellingPointsBackground";
import { BiBarChart, BiPalette } from "react-icons/bi";

const TenantSellingPoints = () => {
  return (
    <SellingPointsBackground>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SellingPointCard
          icon={<FiDollarSign />}
          title="Monetize Every Spin"
          description="Generate affiliate revenue through engaging gamified experiences."
        />

        <SellingPointCard
          icon={<BiBarChart />}
          title="Smart Analytics"
          description="Track user activity, spin quotas, jackpots, and revenue insights."
        />

        <SellingPointCard
          icon={<BiPalette />}
          title="Full Branding Control"
          description="Customize colors, themes, and offers to match your brand identity."
        />

        <SellingPointCard
          icon={<FiSettings />}
          title="Flexible Configuration"
          description="Control quotas, tiers, rewards, and product distribution logic."
        />
      </div>
    </SellingPointsBackground>
  );
};

export default TenantSellingPoints;
