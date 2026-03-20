const CoreLoopInterface = () => {
  return (
    <section className="min-w-xl  grid-col md:grid-cols-3 space-y-4  p-10">
      {[
        {
          title: "GIRE",
          desc: "Você gira a roleta usando sua cota diária.",
          emoji: "🎰",
        },
        {
          title: "DESCUBRA",
          desc: "Descubra produtos afiliados selecionados por parceiros.",
          emoji: "🔎",
        },
        {
          title: "COMPRE",
          desc: "Finalize sua compra diretamente nos marketplaces.",
          emoji: "🛒",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-10 text-center  bg-[#111827] border border-purple-500/20"
        >
          <div className="text-4xl">{item.emoji}</div>
          <h3 className="text-2xl mt-4 font-extrabold tracking-wide text-[#84e9e4]">
            {item.title}
          </h3>
          <p className="text-gray-400 text-base mt-2">{item.desc}</p>
        </div>
      ))}
    </section>
  );
};
export default CoreLoopInterface;
