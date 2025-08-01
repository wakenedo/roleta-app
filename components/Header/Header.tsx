"use client";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { AnimatedTitle } from "../AuthInterface/components/AnimatedTitle";
import Link from "next/link";
import { User } from "@firebase/auth";
import Image from "next/image";
import PromoLogo from "@/public/logo.png";

interface HeaderProps {
  user: User | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-slate-50 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="w-full">
          {user === null ? (
            <Image src={PromoLogo} alt="promo" width={24} />
          ) : (
            <AnimatedTitle small={true} />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Slots
          </a>
          <a href="#" className="hover:underline">
            Roleta
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-900 px-4 py-3 space-y-2 text-sm  z-10 w-full absolute">
          <a href="#" className="block hover:underline">
            Roleta de Ofertas
          </a>
          <a href="#" className="block hover:underline">
            Slots da Sorte
          </a>
          <a href="#" className="block hover:underline">
            Account
          </a>
        </nav>
      )}
    </header>
  );
};
export default Header;
