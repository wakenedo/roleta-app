const SubscriptionModesSectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative z-10 text-center mb-16 cursor-default">
      <h2 className="text-5xl font-extrabold tracking-widest text-[#84e9e4]">
        {title}
      </h2>
      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">{subTitle}</p>
    </div>
  );
};
export default SubscriptionModesSectionTitle;
