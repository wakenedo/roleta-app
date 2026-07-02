import { handleFile } from "@/hooks/utils/brandingLogoHelpers";
import { Dispatch, SetStateAction } from "react";

const LogoPickerDisplay = ({
  logoFile,
  setLogoFile,
}: {
  logoFile: File | null;
  setLogoFile: Dispatch<SetStateAction<File | null>>;
}) => {
  return (
    <div className="flex flex-col mt-2">
      <span className="text-sm ml-2">Escolha seu Logotipo</span>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleFile({ e, setFile: setLogoFile })}
        className="p-2"
      />

      {/* preview */}
      {logoFile && (
        <img
          src={URL.createObjectURL(logoFile)}
          alt="preview"
          className="w-24 h-24 object-contain mt-2"
        />
      )}
    </div>
  );
};
export default LogoPickerDisplay;
