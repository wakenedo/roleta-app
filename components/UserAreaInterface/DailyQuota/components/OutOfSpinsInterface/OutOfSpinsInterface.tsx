import { UserAreaSectionBackground } from "@/components/UserAreaInterface/UserAreaSectionBackground";

const OutOfSpinsInterface = () => {
  return (
    <UserAreaSectionBackground>
      <h3 className="text-sm font-semibold text-slate-800 mb-2">
        Rodadas de hoje
      </h3>
      <hr className="border-t border-slate-300 mb-4" />
      <span className="text-sm text-slate-500">Carregando...</span>
    </UserAreaSectionBackground>
  );
};
export default OutOfSpinsInterface;
