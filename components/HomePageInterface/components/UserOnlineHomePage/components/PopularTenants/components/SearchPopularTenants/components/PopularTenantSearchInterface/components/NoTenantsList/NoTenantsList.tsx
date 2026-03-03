const NoTenantsList = () => {
  return (
    <div className="cursor-default flex flex-col items-center justify-center text-center md:h-170 py-16 px-6">
      <div className="space-y-4 rounded shadow-lg flex flex-col items-center justify-center bg-gradient-to-br from-[#111827] to-[#1f2937] p-6">
        <h3 className="md:text-2xl font-semibold text-white mb-2">
          Nenhum parceiro encontrado
        </h3>

        <p className="text-gray-400 ">
          Parece que não há parceiros disponíveis no momento. Tente ajustar sua
          busca ou volte mais tarde.
        </p>
      </div>
    </div>
  );
};

export default NoTenantsList;
