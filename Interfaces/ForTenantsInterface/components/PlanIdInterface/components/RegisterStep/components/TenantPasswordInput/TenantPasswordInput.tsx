import {
  BsCheckCircle,
  BsCircle,
  BsExclamationCircle,
  BsEye,
  BsEyeSlash,
} from "react-icons/bs";
import { TenantPasswordInputProps } from "../../../../types";

const TenantPasswordInput = ({
  showPassword,
  setPassword,
  setShowPassword,
  setConfirmPassword,
  password,
  validations,
  showMatchState,
  strengthMeta,
  passwordsMatch,
}: TenantPasswordInputProps) => {
  const PasswordRule = ({
    valid,
    label,
  }: {
    valid: boolean;
    label: string;
  }) => {
    return (
      <div
        className={`flex items-center space-x-2 text-xs ${
          valid ? "text-green-600" : "text-slate-400"
        }`}
      >
        {valid ? <BsCheckCircle /> : <BsCircle />}
        <span>{label}</span>
      </div>
    );
  };

  return (
    <div className=" mb-4">
      <span className="text-xs">Senha</span>

      {/* PASSWORD INPUT */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Crie uma senha segura"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-black italic w-full pr-10 bg-slate-100"
        />
        <div className="mt-2">
          <div className="w-full h-2 bg-slate-200 rounded">
            <div
              className={`h-2 rounded transition-all ${strengthMeta.color}`}
              style={{ width: strengthMeta.width }}
            />
          </div>

          <div className="text-xs my-2 text-slate-500">
            Força da senha:{" "}
            <span className="font-medium">{strengthMeta.label}</span>
          </div>
        </div>

        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-5 -translate-y-1/2 cursor-pointer text-slate-500"
        >
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </div>
      </div>

      {/* 🔍 RULES */}
      <div className="space-y-1">
        <PasswordRule valid={validations.length} label="Mínimo 8 caracteres" />
        <PasswordRule
          valid={validations.uppercase}
          label="Uma letra maiúscula"
        />
        <PasswordRule
          valid={validations.lowercase}
          label="Uma letra minúscula"
        />
        <PasswordRule valid={validations.number} label="Um número" />
        <PasswordRule valid={validations.symbol} label="Um símbolo" />
      </div>

      {/* 🔐 CONFIRM PASSWORD */}
      {password.length > 0 && (
        <div className="pt-2">
          <span className="text-xs">Confirmar senha</span>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Repita sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 text-black italic w-full pr-10 bg-slate-100"
            />

            {showMatchState && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {passwordsMatch ? (
                  <BsCheckCircle className="text-green-600" />
                ) : (
                  <BsExclamationCircle className="text-red-500" />
                )}
              </div>
            )}
          </div>

          {showMatchState && (
            <div
              className={`text-xs mt-2 ${
                passwordsMatch ? "text-green-600" : "text-red-500"
              }`}
            >
              {passwordsMatch
                ? "As senhas coincidem"
                : "As senhas não coincidem"}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default TenantPasswordInput;
