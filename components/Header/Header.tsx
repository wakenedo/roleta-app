"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { User } from "@firebase/auth";
import Image from "next/image";
import PromoLogo from "@/public/logo.png";
import { GoogleButton } from "../GoogleButton";
import { AnimatedTitle } from "../AnimatedTitle";

interface HeaderProps {
  user: User | null;
  tenantId?: string;
}

const Header: React.FC<HeaderProps> = ({ user, tenantId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-slate-50 z-20">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between ">
        {/* Logo / Title */}
        <Link href="/" className="w-full">
          {user === null ? (
            <Image src={PromoLogo} alt="promo" width={24} />
          ) : (
            <AnimatedTitle small={true} />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm w-full justify-end">
          {user != null && (
            <Link href="/Games" className="hover:underline">
              <span>Games</span>
            </Link>
          )}

          {user != null && (
            <Link href="/UserArea" className="hover:underline">
              <span>Area de Usuário</span>
            </Link>
          )}
          {tenantId != undefined && (
            <Link href="/TenantArea" className="hover:underline">
              <span>Tenant</span>
            </Link>
          )}
          {user === null && <GoogleButton />}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-900 px-4 py-3 space-y-2 text-sm  z-10 w-full absolute">
          {user != null && (
            <Link
              href="/Games"
              className="block font-semibold text-lg text-slate-50"
            >
              Games
            </Link>
          )}
          {user != null && (
            <Link
              href="/UserArea"
              className="block font-semibold text-lg text-slate-50"
            >
              Area do Usuário
            </Link>
          )}
          {tenantId != undefined && (
            <Link
              href="/TenantArea"
              className="block font-semibold text-lg text-slate-50"
            >
              Area do Tenant
            </Link>
          )}
          {user === null && <GoogleButton />}
        </nav>
      )}
    </header>
  );
};
export default Header;
