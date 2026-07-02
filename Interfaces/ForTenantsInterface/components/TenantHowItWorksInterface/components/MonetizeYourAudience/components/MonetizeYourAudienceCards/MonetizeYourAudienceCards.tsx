import { BiRocket } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { LuLink2 } from "react-icons/lu";

const MonetizeYourAudienceCards = () => {
  return (
    <section className="max-w-8xl w-full grid md:grid-cols-3 gap-5 mb-10 px-4">
      <div
        className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-amber-500/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
      >
        <BiRocket className="md:w-22 md:h-22 text-amber-500 mb-6 mx-auto" />
        <h3 className="md:text-2xl tracking-widest font-bold mb-3 uppercase text-amber-500 text-center">
          Assine um Plano
        </h3>
        <div className="md:py-6">
          <p className="text-slate-400 tracking-widest">
            Escolha o plano ideal para seu volume de produtos e necessidade de
            personalização.
          </p>
        </div>
        <div
          className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
        />
      </div>

      <div
        className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-amber-500/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
      >
        <CiSettings className="md:w-22 md:h-22 text-amber-500 mb-6 mx-auto" />
        <h3 className="md:text-2xl font-bold mb-3 tracking-widest uppercase text-amber-500 text-center">
          Configure sua Marca
        </h3>
        <div className="md:py-6">
          <p className="text-slate-400 tracking-widest">
            Durante o onboarding você define nome, logo, cores e adiciona seus
            produtos ou links afiliados.
          </p>
        </div>
        <div
          className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
        />
      </div>

      <div
        className="cursor-default group relative flex flex-col items-center  
      bg-gradient-to-br from-[#111827] to-[#1f2937]
      border border-amber-500/5
      backdrop-blur-md
      transition-all duration-300 
      hover:-translate-y-2 p-6"
      >
        <LuLink2 className="md:w-22 md:h-22 text-amber-500 mb-4 mx-auto" />
        <h3 className="md:text-2xl font-bold mb-3 tracking-widest uppercase text-amber-500 text-center">
          Receba sua URL Exclusiva
        </h3>
        <div className="md:py-6">
          <p className="text-slate-400 tracking-widest">
            Após concluir, você recebe uma URL própria para promover sua
            experiência gamificada.
          </p>
        </div>
        <div
          className="absolute inset-0  opacity-0 transition-opacity duration-300 
        group-hover:opacity-100 
        bg-gradient-to-r from-[#84e9e4]/1 to-purple-500/15 
        pointer-events-none"
        />
      </div>
    </section>
  );
};
export default MonetizeYourAudienceCards;
