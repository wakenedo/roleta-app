import React from "react";
import { UserTermsInterface } from "@/Interfaces/UserTermsInterface";
import { HeaderAndFooterInterface } from "@/Interfaces/HeaderAndFooterInterface";

const TermsOfService: React.FC = () => {
  return (
    <HeaderAndFooterInterface>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-slate-800 font-sans">
        <main className="relative z-10 max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <UserTermsInterface />
        </main>
      </div>
    </HeaderAndFooterInterface>
  );
};

export default TermsOfService;
