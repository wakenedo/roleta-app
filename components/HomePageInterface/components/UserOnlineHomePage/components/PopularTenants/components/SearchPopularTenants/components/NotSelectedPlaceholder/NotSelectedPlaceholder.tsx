import { LuMousePointerClick } from "react-icons/lu";

const NotSelectedPlaceholder = () => {
  return (
    <div className="h-full flex items-center justify-center border border-slate-700 bg-slate-900/40  shadow-sm">
      <div className="flex flex-col items-center text-center px-6 py-12">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 mb-5">
          <LuMousePointerClick className="w-7 h-7 text-slate-400" />
        </div>

        <h3 className="text-lg font-semibold text-slate-100 mb-2">
          Nenhum parceiro selecionado
        </h3>

        <p className="text-slate-400 max-w-sm">
          Selecione um parceiro ao lado para visualizar os detalhes e
          informações disponíveis.
        </p>
      </div>
    </div>
  );
};

export default NotSelectedPlaceholder;
