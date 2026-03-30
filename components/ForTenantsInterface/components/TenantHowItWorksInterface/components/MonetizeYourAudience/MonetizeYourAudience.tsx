import { SectionTitle } from "../SectionTitle";
import { MonetizeYourAudienceAnimation } from "./components/MonetizeYourAudienceAnimation";
import { MonetizeYourAudienceCards } from "./components/MonetizeYourAudienceCards";

const MonetizeYourAudience = () => {
  const title = "Monetize sua audiência";
  const subTitle =
    "Crie sua própria plataforma interativa, promova seus produtos ou links afiliados, transforme engajamento em conversão!";

  return (
    <div className="cursor-default flex flex-col items-center ">
      <SectionTitle title={title} subTitle={subTitle} />
      <MonetizeYourAudienceAnimation />
      <MonetizeYourAudienceCards />
    </div>
  );
};
export default MonetizeYourAudience;
