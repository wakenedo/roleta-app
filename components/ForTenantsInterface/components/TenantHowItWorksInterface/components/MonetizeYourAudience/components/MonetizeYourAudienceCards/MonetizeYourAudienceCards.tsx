import { BiRocket } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { LuLink2 } from "react-icons/lu";

const MonetizeYourAudienceCards = () => {
  return (
    <section className="max-w-7xl w-full grid md:grid-cols-3 gap-5 mb-10">
      <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6">
        <BiRocket className="md:w-22 md:h-22 text-amber-500 mb-6 mx-auto" />
        <h3 className="md:text-2xl font-bold mb-3 uppercase text-amber-500 text-center">
          Assine um Plano
        </h3>
        <div className="md:py-6">
          <p className="text-slate-200">
            Escolha o plano ideal para seu volume de produtos e necessidade de
            personalização.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6">
        <CiSettings className="md:w-22 md:h-22 text-amber-500 mb-6 mx-auto" />
        <h3 className="md:text-2xl font-bold mb-3 uppercase text-amber-500 text-center">
          Configure sua Marca
        </h3>
        <div className="md:py-6">
          <p className="text-slate-200">
            Durante o onboarding você define nome, logo, cores e adiciona seus
            produtos ou links afiliados.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] border border-slate-800  p-6">
        <LuLink2 className="md:w-22 md:h-22 text-amber-500 mb-4 mx-auto" />
        <h3 className="md:text-2xl font-bold mb-3 uppercase text-amber-500 text-center">
          Receba sua URL Exclusiva
        </h3>
        <div className="md:py-6">
          <p className="text-slate-200">
            Após concluir, você recebe uma URL própria para promover sua
            experiência gamificada.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MonetizeYourAudienceCards;
