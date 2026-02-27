import { TenantProduct } from "@/context/TenantContext/types";
import { TenantError } from "../TenantError";

const TenantPreview = ({
  preview,
  loading,
  error,
}: {
  preview: TenantProduct[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md md:p-4 p-2 ">
      <div className="flex flex-col gap-3 ">
        <div>
          <span className="text-sm font-semibold text-slate-800">Prévia</span>
          <hr className="border-t border-slate-300 my-2" />
          {error && <TenantError error={error} />}
          {loading && <span>Loading tenant...</span>}
        </div>
      </div>
    </div>
  );
};
export default TenantPreview;
