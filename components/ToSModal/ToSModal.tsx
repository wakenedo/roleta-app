"use client";

import { ReactNode, useState } from "react";

type Props = {
  termsContent: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
};

const ToSModal = ({ open, onClose, onAccept, termsContent, title }: Props) => {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  return (
    <div className="absolute bg-black/60 flex justify-center z-50 ">
      <div className="bg-white  p-6 w-[650px] space-y-5 absolute ">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>

        <div className="h-40 overflow-y-auto text-sm text-gray-600 border p-2 rounded">
          {/* placeholder */}
          <>{termsContent}</>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="cursor-pointer"
          />
          <span className="text-slate-800">Eu aceito os Termos de Uso</span>
        </label>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 text-sm">
            Cancelar
          </button>

          <button
            disabled={!checked}
            onClick={onAccept}
            className="px-3 py-1 bg-blue-600 cursor-pointer disabled:cursor-default text-white rounded disabled:opacity-50"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToSModal;
