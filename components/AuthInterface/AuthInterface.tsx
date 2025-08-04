import { GoogleButton } from "./components/GoogleButton";
import { AnimatedTitle } from "./components/AnimatedTitle";

const AuthInterface = () => {
  return (
    <div className="p-2 shadow-lg m-2 bg-slate-50 rounded w-full">
      <div className="m-4 ">
        <AnimatedTitle />
        <div className="md:mt-4 mt-2">
          <p className="text-xs md:text-sm">
            Só aqui você pode economizar enquanto se diverte, encontrar ofertas
            incríveis junte-se a comunidade promobet !
          </p>
        </div>
        <div className="border-t my-4 border-slate-200" />
        <GoogleButton />
      </div>
    </div>
  );
};
export default AuthInterface;
