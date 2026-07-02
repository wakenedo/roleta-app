import { ToSModal } from "@/components/ToSModal";
import { RegisterStepProps } from "../../types";
import { TenantEmailInput } from "./components/TenantEmailInput";
import { TenantNameInput } from "./components/TenantNameInput";
import { TenantPasswordInput } from "./components/TenantPasswordInput";
import { TenantTermsInput } from "./components/TenantTermsInput";
import { TenantsTermsInterface } from "@/Interfaces/TenantsTermsInterface";

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
  emailValue,
  setEmailValue,
  handleChange,
  validEmail,
  showValidation,
  showMatchState,
  strengthMeta,
  handleNameChange,
  nameValue,
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
        <TenantNameInput
          handleNameChange={handleNameChange}
          nameValue={nameValue}
        />
        <TenantEmailInput
          setEmail={setEmail}
          email={email}
          isVerified={isEmailVerified}
          onCheckVerification={checkEmailVerification}
          onSendVerification={createAndSendVerification}
          loading={checkingVerification}
          emailValue={emailValue}
          handleChange={handleChange}
          setEmailValue={setEmailValue}
          showValidation={showValidation}
          validEmail={validEmail}
        />
        <TenantPasswordInput
          confirmPassword={confirmPassword}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          password={password}
          validations={validations}
          strengthMeta={strengthMeta}
          passwordsMatch={passwordsMatch}
          showMatchState={showMatchState}
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
