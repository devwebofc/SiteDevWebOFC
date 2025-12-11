import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  onNavigate: (page: 'home' | 'quote' | 'privacy', hash?: string) => void;
}

const Navbar = ({ onNavigate }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Processo", href: "#processo" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate('home', href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
          <img 
            src="/assets/images/logo_devweb.png" 
            alt="DevWeb Logo" 
            className="w-16 h-16 object-contain transform scale-150 group-hover:scale-175 transition-transform"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-300 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => onNavigate('quote')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(255,23,68,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            Orçamento
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg text-gray-200 hover:text-primary py-2"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onNavigate('quote');
              setIsOpen(false);
            }}
            className="mt-4 text-center py-3 rounded-lg bg-primary text-white font-bold w-full"
          >
            Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;