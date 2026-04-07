import { SetStateAction } from "react";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";

const TenantTermsInput = ({
  setShowToS,
  acceptedToS,
}: {
  setShowToS: (value: SetStateAction<boolean>) => void;
  acceptedToS: boolean;
}) => {
  return (
    <>
      <div className="mb-0">
        <span className="text-xs">Termos </span>
      </div>
      <div
        onClick={() => setShowToS(true)}
        className={`flex items-center justify-between  px-3 p-2 cursor-pointer  border transition
                    ${
                      acceptedToS
                        ? "border-green-500 bg-green-50 "
                        : "border-slate-300 bg-slate-50 hover:bg-slate-100 "
                    }`}
      >
        <span className="text-sm text-slate-500 font-medium">
          Termos de Uso
        </span>

        {acceptedToS ? (
          <div className="flex items-center space-x-1 text-green-600">
            <BsCheckCircle />
            <span className="text-xs">Aceito</span>
          </div>
        ) : (
          <div className="flex items-center space-x-1 text-slate-500">
            <BsExclamationCircle />
            <span className="text-xs">Obrigatório</span>
          </div>
        )}
      </div>
    </>
  );
};
export default TenantTermsInput;
