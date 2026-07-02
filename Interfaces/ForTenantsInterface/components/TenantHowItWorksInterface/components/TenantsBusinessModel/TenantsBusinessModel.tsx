import { SectionTitle } from "../SectionTitle";
import { TenantsBusinessModelCards } from "./components/TenantsBusinessModelCards";

const TenantBusinessModel = () => {
  const title = "Modelo de Negócio para Parceiros";
  const subTitle =
    "Ideal para afiliados, creators e marcas que desejam promover seus próprios produtos ou marketplaces.";
  return (
    <div className="cursor-default flex items-center relative md:mx-2 bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-white  p-16">
      <SectionTitle title={title} subTitle={subTitle} />
      <TenantsBusinessModelCards />
    </div>
  );
};
export default TenantBusinessModel;
