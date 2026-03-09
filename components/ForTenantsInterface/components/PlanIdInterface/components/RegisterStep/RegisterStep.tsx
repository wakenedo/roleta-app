import { Dispatch, SetStateAction } from "react";

const RegisterStep = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  registerTenant,
}: {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  registerTenant: (
    name: string,
    email: string,
    password: string,
  ) => Promise<void>;
}) => {
  return (
    <div className="flex flex-col space-y-2 mt-6 mb-4">
      <>
        <div className="mb-0">
          <span className="text-xs">Nome </span>
        </div>

        <input
          type="text"
          placeholder="Nome do parceiro"
          onChange={(e) => setName(e.target.value)}
          className="p-2 text-black bg-slate-100"
        />
      </>
      <>
        <div className="mb-0">
          <span className="text-xs">Email </span>
        </div>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-black italic"
        />
      </>

      <>
        <div className="mb-0">
          <span className="text-xs">Password </span>
        </div>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-black italic"
        />
      </>

      <button
        onClick={() => registerTenant(name, email, password)}
        className="bg-indigo-500 py-3 rounded-lg mt-4"
      >
        Criar Conta
      </button>
    </div>
  );
};
export default RegisterStep;
