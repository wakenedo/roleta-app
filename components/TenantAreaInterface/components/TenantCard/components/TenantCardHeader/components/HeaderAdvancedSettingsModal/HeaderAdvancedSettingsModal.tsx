import { HeaderAdvancedSettingsModalProps } from "@/components/TenantAreaInterface/types";

const HeaderAdvancedSettingsModal = ({
  activeModal,
  closeModal,
}: HeaderAdvancedSettingsModalProps) => {
  return (
    <div className="  absolute inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 min-w-[400px] shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {activeModal === "advanced" && "Advanced Settings"}
          {activeModal === "bug" && "Report Bug"}
          {activeModal === "suggestion" && "Suggestions"}
        </h2>

        <div className="mb-4 text-sm text-slate-600">
          Placeholder modal content.
        </div>

        <button
          onClick={closeModal}
          className="px-4 py-2 rounded bg-slate-700 text-white hover:bg-slate-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default HeaderAdvancedSettingsModal;
