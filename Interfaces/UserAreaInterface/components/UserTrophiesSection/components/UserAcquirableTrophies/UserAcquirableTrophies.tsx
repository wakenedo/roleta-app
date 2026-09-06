import { UserAreaSectionBackground } from "@/backgrounds/UserAreaSectionBackground";

const UsersAcquirableTrophies = () => {
  return (
    <div className="cursor-default">
      <UserAreaSectionBackground>
        <span className="text-lg font-semibold tracking-widest text-amber-500 mb-2 line-clamp-2">
          Troféus Disponíveis
        </span>
        <hr className="border-t border-slate-300 mb-4" />
      </UserAreaSectionBackground>
    </div>
  );
};
export default UsersAcquirableTrophies;
