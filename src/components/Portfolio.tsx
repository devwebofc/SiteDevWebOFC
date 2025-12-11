import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Project } from "../types";

interface Props {
  onNavigate: (page: 'home' | 'quote' | 'privacy', hash?: string) => void;
}

const Portfolio = ({ onNavigate }: Props) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Cromática Filmes",
      category: "Site Institucional",
      image: "/assets/images/Sitecromatica.png",
      url: "https://cromaticafilmes.com.br",
    },
    {
      id: 2,
      title: "Cyber Fitness",
      category: "Landing Page",
      image: "https://picsum.photos/seed/project2/800/600",
    },
    {
      id: 3,
      title: "Arch Studio",
      category: "Institucional",
      image: "https://picsum.photos/seed/project3/800/600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Projetos Recentes</h2>
            </div>
            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold">
              Ver todos os projetos
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.2 * index}>
              <div 
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => project.url && window.open(project.url, '_blank')}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium mb-1 block">{project.category}</span>
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Reveal>
            <div 
              onClick={() => onNavigate('quote')}
              className="inline-flex flex-col items-center justify-center p-8 border border-dashed border-white/10 rounded-2xl bg-white/5 max-w-2xl mx-auto hover:border-primary/50 transition-colors group cursor-pointer w-full"
            >
               <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-white">O próximo projeto será o seu?</h3>
               <p className="text-gray-400 mb-6">Vamos criar algo extraordinário juntos.</p>
               <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                 Solicitar Proposta <ArrowRight size={18} />
               </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;