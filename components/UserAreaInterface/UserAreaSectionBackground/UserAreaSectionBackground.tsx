import { ReactNode } from "react";

const UserAreaSectionBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white/90 backdrop-blur shadow-md md:px-4 md:py-4 px-3 py-3">
      {children}
    </div>
  );
};
export default UserAreaSectionBackground;
