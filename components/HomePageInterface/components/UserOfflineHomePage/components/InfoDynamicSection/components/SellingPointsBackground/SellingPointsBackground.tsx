const SellingPointsBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative overflow-hidden pt-5  px-2 text-white ">
      {/* Central Glow */}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SellingPointsBackground;
