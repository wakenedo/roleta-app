import { GiFireTail, GiSparkles } from "react-icons/gi";
import { SellingPointCard } from "../SellingPointCard";
import { SellingPointsBackground } from "../SellingPointsBackground";
import { FiZap } from "react-icons/fi";
import { HiShieldCheck } from "react-icons/hi";

const UserSellingPoints = () => {
  return (
    <SellingPointsBackground>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SellingPointCard
          icon={<GiSparkles />}
          title="Daily Free Spins"
          description="Get up to 5 free spins every day and discover new affiliate offers."
        />

        <SellingPointCard
          icon={<GiFireTail />}
          title="Exclusive Rewards"
          description="Unlock special jackpots and rare product opportunities."
        />

        <SellingPointCard
          icon={<FiZap />}
          title="Instant Results"
          description="Spin and instantly receive curated product suggestions."
        />

        <SellingPointCard
          icon={<HiShieldCheck />}
          title="Secure & Fair"
          description="All spins are tracked and securely stored per tenant."
        />
      </div>
    </SellingPointsBackground>
  );
};
export default UserSellingPoints;
