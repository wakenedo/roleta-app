import { SetStateAction, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";

const MAX_LENGTH = 20;

// 🚫 VERY BASIC pt-BR blocklist (expand later or move to backend)
const bannedWords = [
  "puta",
  "merda",
  "caralho",
  "porra",
  "foda",
  "viado",
  "fdp",
  "filhodaputa",
];

const normalize = (value: string) => {
  return value
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "");
};

const containsBannedWord = (value: string) => {
  const normalized = normalize(value);
  return bannedWords.some((word) => normalized.includes(word));
};

const sanitize = (value: string) => {
  return value
    .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, "") // remove special chars
    .replace(/\s+/g, " ") // collapse spaces
    .trimStart();
};

const TenantNameInput = ({
  setName,
}: {
  setName: (value: SetStateAction<string>) => void;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (raw: string) => {
    let clean = sanitize(raw);

    if (clean.length > MAX_LENGTH) {
      clean = clean.slice(0, MAX_LENGTH);
    }

    setValue(clean);
    setName(clean);
  };

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
          onChange={(e) => handleChange(e.target.value)}
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
