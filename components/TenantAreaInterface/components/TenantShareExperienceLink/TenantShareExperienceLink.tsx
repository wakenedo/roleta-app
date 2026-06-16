import { CgCopy } from "react-icons/cg";
import { TenantShareExperience } from "../../types";

const TenantShareExperienceLink = ({
  tenantIdentifier,
  absolutePosition,
}: TenantShareExperience) => {
  const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
  const url = `${APP_URL}/${tenantIdentifier}/slots`;

  return (
    <div
      className={` 
        p-4 flex flex-col  bg-white/90 backdrop-blur mt-1
         shadow ${absolutePosition ? "absolute" : ""}`}
    >
      <div className="flex justify-center absolute top-4 right-4  items-center ">
        <button
          className="text-sm font-bold  relative cursor-pointer text-slate-400 hover:text-slate-600"
          onClick={() => navigator.clipboard.writeText(url)}
        >
          <CgCopy size={18} />
        </button>
      </div>
      <div className="flex flex-col space-y-2 ">
        <span className="text-sm tracking-widest">
          Compartilhar Experiência
        </span>
        <div className="border border-slate-400 rounded bg-slate-200 p-2 cursor-default">
          <span className="text-sm line-clamp-1">{url}</span>
        </div>
      </div>
    </div>
  );
};
export default TenantShareExperienceLink;
