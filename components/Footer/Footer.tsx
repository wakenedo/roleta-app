import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#0b0f1f] via-[#141b3a] to-[#1d1147] text-gray-300">
      {/* Top Glow Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#84e9e4] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#84e9e4] tracking-wider">
            PROMOBET
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            Transformando a descoberta de ofertas em uma experiência divertida e
            interativa.
          </p>
        </div>

        {/* Plataforma */}
        <div>
          <h4 className="text-white font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq" className="hover:text-[#84e9e4] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/HowItWorks"
                className="hover:text-[#84e9e4] transition"
              >
                Como Funciona
              </Link>
            </li>
            <li>
              <Link href="/Tenants" className="hover:text-[#84e9e4] transition">
                Para Parceiros
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/TermsOfService"
                className="hover:text-[#84e9e4] transition"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                href="/PrivacyPolicy"
                className="hover:text-[#84e9e4] transition"
              >
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/CookiesPolicy"
                className="hover:text-[#84e9e4] transition"
              >
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Promobet. Todos os direitos reservados.
        <br />A Promobet não vende produtos diretamente. As compras são
        realizadas em marketplaces parceiros.
      </div>
    </footer>
  );
};

export default Footer;
