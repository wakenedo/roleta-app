const SubscriptionModesSectionFooterDisclaimer = ({
  message,
}: {
  message: string;
}) => {
  return (
    <div className="mt-16 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
      {message}
    </div>
  );
};
export default SubscriptionModesSectionFooterDisclaimer;
