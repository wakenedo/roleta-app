import { FiAlertTriangle } from "react-icons/fi";

const ErrorTenantList = ({ error }: { error: string | null }) => {
  if (!error) return null;

  return (
    <div className="md:h-170 flex items-center justify-center border border-red-900/40 bg-red-950/30 rounded-lg">
      <div className="flex flex-col items-center text-center px-6 py-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-900/40 mb-5">
          <FiAlertTriangle className="w-7 h-7 text-red-400" />
        </div>

        <h3 className="text-lg font-semibold text-red-300 mb-2">
          Erro ao carregar tenants
        </h3>

        <p className="text-red-400/80 max-w-sm">{error}</p>
      </div>
    </div>
  );
};

export default ErrorTenantList;
