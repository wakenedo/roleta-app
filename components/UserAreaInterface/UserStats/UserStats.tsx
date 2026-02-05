// components/UserStats.tsx
"use client";

import { User } from "firebase/auth";

const UserStats = ({ user }: { user: User }) => {
  return (
    <div className="bg-white/90 backdrop-blur rounded-lg shadow-md p-4">
      <div>
        <span className="text-sm font-semibold text-slate-800">
          Estatísticas do Usuário
        </span>
        <hr className="border-t border-slate-300 my-2" />
      </div>
      <div className="w-fit flex flex-col">
        <div>
          <span className="text-xs font-semibold text-slate-600">
            Assinatura Ativa :
          </span>
          <div>
            <span className="text-xs text-slate-600">
              {user.email?.includes("promobet.com") ? "Premium" : "Gratuita"}
            </span>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">
            Troféus Conquistados :
          </span>
          <div></div>
        </div>
        <div>
          <span className="text-xs font-semibold text-slate-600">
            Giros Realizados (Roleta de Ofertas) :
          </span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
