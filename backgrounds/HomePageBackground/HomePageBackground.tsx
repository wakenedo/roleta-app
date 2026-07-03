const HomePageBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-amber-500 to-[#84e9e4]">
      <main className="flex flex-col justify-between  min-h-screen relative z-10 ">
        {children}
      </main>
    </div>
  );
};
export default HomePageBackground;
