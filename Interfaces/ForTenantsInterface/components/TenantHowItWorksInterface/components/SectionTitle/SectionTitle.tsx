const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <section className="max-w-5xl text-center mt-4 mb-4">
      <h1 className="uppercase text-4xl md:text-6xl font-extrabold mb-2 tracking-widest text-[#84e9e4]">
        {title}
      </h1>

      <p className="text-slate-400 text-lg md:text-xl tracking-widest">
        {subTitle}
      </p>
    </section>
  );
};
export default SectionTitle;
