import { SetStateAction } from "react";

const TenantNameInput = ({
  setName,
}: {
  setName: (value: SetStateAction<string>) => void;
}) => {
  return (
    <>
      <div className="mb-0">
        <span className="text-xs">Nome </span>
      </div>

      <input
        type="text"
        placeholder="Nome do parceiro"
        onChange={(e) => setName(e.target.value)}
        className="p-2 text-black italic bg-slate-100"
      />
    </>
  );
};
export default TenantNameInput;
