"use client";

import { useState } from "react";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { TenantEmailInputProps } from "../../../../types";

const MAX_LENGTH = 60;

const normalizeEmail = (value: string) => {
  return value.trim().toLowerCase();
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const TenantEmailInput = ({
  email,
  setEmail,
  onSendVerification,
  onCheckVerification,
  isVerified,
  loading,
}: TenantEmailInputProps) => {
  const [value, setValue] = useState(email);

  const handleChange = (raw: string) => {
    let clean = normalizeEmail(raw);

    if (clean.length > MAX_LENGTH) {
      clean = clean.slice(0, MAX_LENGTH);
    }

    setValue(clean);
    setEmail(clean);
  };

  const valid = isValidEmail(value);
  const showValidation = value.length > 0;

  return (
    <div className="flex flex-col space-y-2">
      {/* Label */}
      <span className="text-xs">Email</span>

      {/* Input */}
      <div className="relative">
        <input
          type="email"
          value={value}
          placeholder="seu@email.com"
          onChange={(e) => handleChange(e.target.value)}
          className={`p-2 text-black italic bg-slate-100 w-full pr-10 border transition
            ${
              showValidation
                ? valid
                  ? "border-green-500"
                  : "border-red-500"
                : "border-transparent focus:border-indigo-400"
            }`}
        />

        {/* Icon */}
        {showValidation && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {valid ? (
              <BsCheckCircle className="text-green-600" />
            ) : (
              <BsExclamationCircle className="text-red-500" />
            )}
          </div>
        )}
      </div>

      {/* Feedback */}
      {showValidation && (
        <div className={`text-xs ${valid ? "text-green-600" : "text-red-500"}`}>
          {valid ? "Email válido" : "Formato de email inválido"}
        </div>
      )}

      {/* 🔥 Verification Actions */}
      {valid && !isVerified && (
        <button
          onClick={onSendVerification}
          disabled={loading}
          className="bg-indigo-600 text-white text-sm py-1 rounded disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Verificar email"}
        </button>
      )}

      {/* 🔁 Check again */}
      {valid && !isVerified && (
        <button
          onClick={onCheckVerification}
          className="text-xs text-indigo-400 underline"
        >
          Já verificou? Clique para confirmar
        </button>
      )}

      {/* ✅ Verified */}
      {isVerified && (
        <div className="text-xs text-green-500 flex items-center gap-1">
          <BsCheckCircle /> Email verificado
        </div>
      )}
    </div>
  );
};

export default TenantEmailInput;
