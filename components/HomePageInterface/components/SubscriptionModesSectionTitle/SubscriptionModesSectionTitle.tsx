const SubscriptionModesSectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative z-10 text-center mb-18 cursor-default">
      <h2 className="text-5xl font-extrabold tracking-widest text-[#84e9e4]">
        {title}
      </h2>
      <p className="mt-4 md:text-xl text-slate-400 tracking-widest max-w-3xl mx-auto">
        {subTitle}
      </p>
    </div>
  );
};
export default SubscriptionModesSectionTitle;
