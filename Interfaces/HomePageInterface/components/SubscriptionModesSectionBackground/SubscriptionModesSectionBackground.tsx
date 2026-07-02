import { ReactElement } from "react";

const SubscriptionModesSectionBackground = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <section className="relative md:mx-2 my-20  overflow-hidden bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white p-16">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#84e9e4] opacity-10 blur-[160px] rounded-full" />
      </div>
      {children}
    </section>
  );
};
export default SubscriptionModesSectionBackground;
