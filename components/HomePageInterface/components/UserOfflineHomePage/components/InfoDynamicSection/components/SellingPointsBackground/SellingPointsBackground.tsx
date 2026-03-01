const SellingPointsBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative overflow-hidden  px-1 text-white ">
      {/* Central Glow */}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SellingPointsBackground;
