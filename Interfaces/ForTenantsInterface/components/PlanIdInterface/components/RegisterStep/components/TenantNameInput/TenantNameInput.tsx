import { BsExclamationCircle } from "react-icons/bs";
import { containsBannedWord } from "../../../../utils";
import { MAX_LENGTH } from "../../../../enums/nameRules";

const TenantNameInput = ({
  handleNameChange,
  nameValue,
}: {
  handleNameChange: (raw: string) => void;
  nameValue: string;
}) => {
  const value = nameValue;

  const hasBanned = containsBannedWord(value);
  const isTooLong = value.length >= MAX_LENGTH;

  const showError = hasBanned;

  return (
    <div className="flex flex-col space-y-1">
      {/* Label */}
      <span className="text-xs">Nome</span>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder="Nome do parceiro"
          onChange={(e) => handleNameChange(e.target.value)}
          className={`p-2 text-black italic bg-slate-100 w-full pr-10 border transition
            ${
              showError
                ? "border-red-500"
                : "border-transparent focus:border-indigo-400"
            }`}
        />

        {/* Error icon */}
        {showError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
            <BsExclamationCircle />
          </div>
        )}
      </div>

      {/* Feedback row */}
      <div className="flex justify-between text-xs">
        {/* Left message */}
        <div className={`${showError ? "text-red-500" : "text-slate-400"}`}>
          {showError
            ? "Nome contém palavras não permitidas"
            : "Use um nome profissional"}
        </div>

        {/* Char counter */}
        <div className={`${isTooLong ? "text-amber-500" : "text-slate-400"}`}>
          {value.length}/{MAX_LENGTH}
        </div>
      </div>
    </div>
  );
};

export default TenantNameInput;
