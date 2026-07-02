const SubscriptionCardsFooterDisclaimer = ({
  message,
}: {
  message: string;
}) => {
  return (
    <div className="italic pt-4 text-center text-xs text-gray-500 max-w-3xl mx-auto cursor-default">
      {message}
    </div>
  );
};
export default SubscriptionCardsFooterDisclaimer;
