import { TenantsTermsInterface } from "@/components/TenantsTermsInterface";
import { ToSModal } from "@/components/ToSModal";
import { RegisterStepProps } from "../../types";
import { TenantEmailInput } from "./components/TenantEmailInput";
import { TenantNameInput } from "./components/TenantNameInput";
import { TenantPasswordInput } from "./components/TenantPasswordInput";
import { TenantTermsInput } from "./components/TenantTermsInput";

const RegisterStep = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  registerTenant,
  checkEmailVerification,
  createAndSendVerification,
  checkingVerification,
  isEmailVerified,
  showToS,
  setShowToS,
  acceptedToS,
  showPassword,
  setShowPassword,
  confirmPassword,
  setConfirmPassword,
  passwordsMatch,
  validations,
  isPasswordValid,
  handleAcceptToS,
}: RegisterStepProps) => {
  return (
    <>
      <ToSModal
        title="Parceiros"
        termsContent={<TenantsTermsInterface />}
        open={showToS}
        onClose={() => setShowToS(false)}
        onAccept={handleAcceptToS}
      />
      <div className="flex flex-col space-y-4  my-4">
        <TenantTermsInput acceptedToS={acceptedToS} setShowToS={setShowToS} />
        <TenantNameInput setName={setName} />
        <TenantEmailInput
          setEmail={setEmail}
          email={email}
          isVerified={isEmailVerified}
          onCheckVerification={checkEmailVerification}
          onSendVerification={createAndSendVerification}
          loading={checkingVerification}
        />
        <TenantPasswordInput
          confirmPassword={confirmPassword}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          password={password}
          validations={validations}
        />
        <button
          onClick={() => registerTenant(name, email, password)}
          className="bg-indigo-500 py-3 rounded-lg mt-2 cursor-pointer disabled:bg-slate-500 disabled:cursor-default"
          disabled={
            !acceptedToS ||
            !name ||
            !email ||
            !password ||
            !isPasswordValid ||
            !passwordsMatch ||
            !isEmailVerified
          }
        >
          Criar Conta
        </button>
      </div>
    </>
  );
};
export default RegisterStep;
