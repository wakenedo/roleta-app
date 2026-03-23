"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
};

const ToSModal = ({ open, onClose, onAccept }: Props) => {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  return (
    <div className="absolute bg-black/60 flex justify-center z-50 ">
      <div className="bg-white  p-6 w-[650px] space-y-5 absolute ">
        <h2 className="text-xl font-bold text-slate-800">Termos de Uso</h2>

        <div className="h-40 overflow-y-auto text-sm text-gray-600 border p-2 rounded">
          {/* placeholder */}
          <p>Ao utilizar a plataforma, você concorda com os termos...</p>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
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
            className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToSModal;
