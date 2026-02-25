import { SlotsTitleGradient } from "./components/SlotsTitleGradient";

const SlotsTitle = ({ tenantName }: { tenantName?: string }) => {
  return (
    <>
      {tenantName && (
        <div className="ml-5 md:text-2xl font-semibold">{tenantName}</div>
      )}
      <SlotsTitleGradient />
    </>
  );
};
export default SlotsTitle;
