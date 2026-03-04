import { Tenant } from "@/context/TenantContext/types";
import { TenantSubscriptionModes } from "../TenantSubscriptionModes";
import { AreaBackground } from "../UserOfflineHomePage/components/AreaBackground";
import { UserSubscriptionModes } from "../UserSubscriptionModes";
import { ActiveTenantsInterface } from "./components/ActiveTenantsInterface";
import { UserState } from "@/context/UserContext/types";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const confettiEmojis = ["🎉", "✨", "🎊"];
const UserOnlineHomePage = ({
  userData,
  tenant,
}: {
  userData: UserState | null;
  tenant?: Tenant | null;
}) => {
  const [mounted, setMounted] = useState(false);
  const [confetti, setConfetti] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const width = containerRef.current?.offsetWidth || 4400;

    const positions = Array.from({ length: 40 }, () => Math.random() * width);

    setConfetti(positions);
  }, []);

  if (!mounted) return null;
  return (
    <div
      ref={containerRef}
      className="relative flex flex-col  mt-10  overflow-hidden "
    >
      {confetti.map((x, i) => (
        <motion.div
          key={i}
          className="absolute text-xl "
          initial={{ y: -50, x, opacity: 0 }}
          animate={{
            y: 1000,
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.1,
          }}
        >
          {confettiEmojis[i % confettiEmojis.length]}
        </motion.div>
      ))}

      <ActiveTenantsInterface />
      <AreaBackground>
        <UserSubscriptionModes userData={userData} />
        <TenantSubscriptionModes tenant={tenant} />
      </AreaBackground>
    </div>
  );
};
export default UserOnlineHomePage;
