const DepletedCTA = () => {
  return (
    <div className="my-3 text-center">
      <button
        className="text-xs font-semibold text-white bg-slate-800 
              cursor-pointer px-20 py-2 drop-shadow-xl text-shadow-2xs rounded 
              hover:bg-slate-700 transition"
        onClick={() => {
          // future CTA action
          console.log("Upgrade or wait until tomorrow");
        }}
      >
        Compre mais giros ou Assine
      </button>
    </div>
  );
};
export default DepletedCTA;
