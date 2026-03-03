const UserMaxedSubscription = () => {
  return (
    <section
      id="user-subscription-maxed"
      className="relative md:mx-2 my-20  overflow-hidden bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white p-16"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-500 opacity-10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 text-center mb-16 cursor-default">
        <h2 className="text-5xl font-extrabold tracking-widest bg-gradient-to-r text-[#84e9e4] ">
          MAXED PLAN
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">PROMOBET.</p>
      </div>

      <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
        Thank you !
      </div>
    </section>
  );
};
export default UserMaxedSubscription;
