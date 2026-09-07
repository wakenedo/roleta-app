import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

type Trophy = {
  id: string;
  title: string;
  description: string;
  requirement: string;
  icon: string;
  progress?: number;
  target?: number;
};

const AVAILABLE_TROPHIES: Trophy[] = [
  {
    id: "first-spin",
    title: "Primeiro Giro",
    description: "Seu primeiro passo na roleta.",
    requirement: "Realize seu primeiro giro",
    icon: "🎡",
    progress: 0,
    target: 1,
  },
  {
    id: "explorer",
    title: "Explorador",
    description: "Descubra novas oportunidades.",
    requirement: "Visite 10 ofertas diferentes",
    icon: "🧭",
    progress: 4,
    target: 10,
  },
  {
    id: "lucky",
    title: "Sortudo",
    description: "A sorte encontrou você.",
    requirement: "Ganhe 5 vezes na roleta",
    icon: "🍀",
    progress: 2,
    target: 5,
  },
  {
    id: "collector",
    title: "Colecionador",
    description: "Uma boa coleção começa assim.",
    requirement: "Visite ofertas de 5 lojas diferentes",
    icon: "🏪",
    progress: 2,
    target: 5,
  },
];

const UsersAcquirableTrophies = () => {
  return (
    <div className="cursor-default">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Troféus Disponíveis
        </span>

        <hr className="border-t border-slate-300 mb-4" />

        <div className="border border-dashed overflow-y-auto scrollbar-none lg:h-94.5 border-slate-300 rounded p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {AVAILABLE_TROPHIES.map((trophy) => {
              const progress = trophy.progress ?? 0;
              const target = trophy.target ?? 1;
              const percentage = Math.min(
                100,
                Math.round((progress / target) * 100),
              );

              return (
                <div
                  key={trophy.id}
                  className="
                    group relative overflow-hidden
                    rounded-lg border border-amber-200
                    bg-linear-to-br from-amber-50 via-white to-slate-50
                    p-3 shadow-sm
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-md opacity-65 hover:opacity-100
                  "
                >
                  {/* Trophy badge */}
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-full border-2 border-amber-300
                        bg-amber-100
                        text-2xl
                        shadow-inner
                        transition-transform duration-200
                        group-hover:scale-105
                      "
                    >
                      {trophy.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-700">
                        {trophy.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2">
                        {trophy.description}
                      </p>
                    </div>
                  </div>

                  {/* Requirement */}
                  <div className="mt-3 rounded-md bg-white/70 px-2.5 py-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Requisito
                    </span>

                    <span className="text-xs font-medium text-slate-600">
                      {trophy.requirement}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between text-[10px]">
                      <span className="font-medium text-slate-400">
                        Progresso
                      </span>

                      <span className="font-semibold text-amber-600">
                        {progress}/{target}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-amber-400 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </UserAreaSectionBackground>
    </div>
  );
};

export default UsersAcquirableTrophies;
