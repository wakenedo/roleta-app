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
    <div className="flex flex-col space-y-4 mt-6">
      <>
        <span>Nome :</span>
        <input
          type="text"
          placeholder="Nome do parceiro"
          onChange={(e) => setName(e.target.value)}
          className="p-2 text-black bg-slate-100"
        />
      </>
      <>
        <span>Email :</span>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-black"
        />
      </>

      <>
        <span>Password :</span>
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-black"
        />
      </>

      <button
        onClick={() => registerTenant(name, email, password)}
        className="bg-indigo-500 py-3 rounded-lg"
      >
        Criar Conta
      </button>
    </div>
  );
};
export default RegisterStep;
