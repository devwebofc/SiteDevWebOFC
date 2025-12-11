import React from "react";
import { Mail, Phone, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Props {
  onNavigate: (page: 'home' | 'quote' | 'privacy', hash?: string) => void;
}

const Footer = ({ onNavigate }: Props) => {
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate('home', href);
  };

  return (
    <footer id="contato" className="bg-[#050505] pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Main CTA Card */}
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-r from-primary to-secondary p-10 md:p-16 mb-20 overflow-hidden text-center md:text-left shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pronto para começar?</h2>
                <p className="text-white/80 text-lg max-w-xl">Vamos transformar sua ideia em uma presença digital poderosa hoje mesmo.</p>
              </div>
              <a href="https://wa.me/5534997315975" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl flex items-center gap-2">
                Falar no WhatsApp <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
          <div className="md:col-span-2">
             <button 
               onClick={() => onNavigate('home')}
               className="flex items-center mb-6 cursor-pointer"
             >
              <img 
                src="/assets/images/logo_devweb.png" 
                alt="DevWeb Logo" 
                className="w-16 h-16 object-contain transform scale-150"
              />
             </button>
            <p className="text-gray-400 mb-6 max-w-sm">
              Agência digital especialista em criação de sites, landing pages e soluções web. Unimos design estratégico e tecnologia de ponta para alavancar seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/devwebofc?igsh=MWVudDdxNjRhNTZO" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/douglas-miqueias/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              {/* Assuming a GitHub URL based on brand name as requested input was an email */}
              <a href="https://github.com/devwebofc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#servicos" onClick={(e) => handleLinkClick(e, '#servicos')} className="text-gray-400 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, '#portfolio')} className="text-gray-400 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#processo" onClick={(e) => handleLinkClick(e, '#processo')} className="text-gray-400 hover:text-primary transition-colors">Processo</a></li>
              <li><a href="#depoimentos" onClick={(e) => handleLinkClick(e, '#depoimentos')} className="text-gray-400 hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-primary" />
                devwebofc@gmail.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-primary" />
                (34) 99731-5975
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 DevWeb Agency. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Termos</a>
            <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400">Privacidade</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;