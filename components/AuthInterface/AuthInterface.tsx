import { GoogleButton } from "./components/GoogleButton";

const AuthInterface = () => {
  return (
    <div className=" relative p-1 shadow-lg mb-2 mx-2 bg-slate-50 rounded items-center">
      <div className=" flex flex-col items-center">
        <GoogleButton />
      </div>
    </div>
  );
};
export default AuthInterface;
