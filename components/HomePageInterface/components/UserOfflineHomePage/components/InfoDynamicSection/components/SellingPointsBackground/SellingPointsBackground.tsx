const SellingPointsBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-2 my-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 shadow-xl">
      {children}
    </div>
  );
};
export default SellingPointsBackground;
