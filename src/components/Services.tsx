import React from "react";
import { Layout, Smartphone, Rocket, Globe } from "lucide-react";
import { Reveal } from "./Reveal";
import { Service } from "../types";

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Landing Pages",
      description: "Páginas focadas em conversão com copywriting estratégico e design persuasivo para maximizar suas vendas.",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Sites Institucionais",
      description: "Fortaleça a autoridade da sua marca com um site profissional, moderno e totalmente gerenciável.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Design UI/UX",
      description: "Interfaces intuitivas e experiências de usuário memoráveis que encantam e retêm seus clientes.",
      icon: <Layout className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Responsividade",
      description: "Seu site perfeito em qualquer dispositivo. Mobile-first development para a melhor experiência.",
      icon: <Smartphone className="w-8 h-8" />,
    },
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/4"></div>
        </div>

      <div className="container max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">O que fazemos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Soluções digitais <br/> sob medida</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={0.1 * index}>
              <div className="group relative p-8 h-full rounded-2xl border border-white/5 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(255,23,68,0.1)] overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-dark rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-black/20">
                    {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;