import { SetStateAction } from "react";

const TenantEmailInput = ({
  setEmail,
}: {
  setEmail: (value: SetStateAction<string>) => void;
}) => {
  return (
    <>
      <div className="mb-0">
        <span className="text-xs">Email </span>
      </div>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 text-black italic bg-slate-100"
      />
    </>
  );
};
export default TenantEmailInput;
