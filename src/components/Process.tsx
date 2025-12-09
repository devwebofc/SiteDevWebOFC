import React from "react";
import { Reveal } from "./Reveal";
import { ProcessStep } from "../types";

const Process = () => {
  const steps: ProcessStep[] = [
    { id: 1, title: "Planejamento", description: "Briefing detalhado e análise de concorrentes para definir a estratégia." },
    { id: 2, title: "Design UI/UX", description: "Criação de wireframes e layout visual focado na experiência do usuário." },
    { id: 3, title: "Desenvolvimento", description: "Codificação com tecnologias modernas, limpas e otimizadas para SEO." },
    { id: 4, title: "Entrega e Suporte", description: "Publicação do projeto e treinamento para gestão do conteúdo." },
  ];

  return (
    <section id="processo" className="py-24 bg-dark relative">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal>
            <div className="text-center mb-20">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Como trabalhamos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Processo simples e eficiente</h2>
            </div>
        </Reveal>

        <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2"></div>

            <div className="flex flex-col gap-12 md:gap-0">
                {steps.map((step, index) => (
                    <Reveal key={step.id} delay={0.2}>
                        <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            
                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                                <div className="p-6 rounded-xl bg-panel border border-white/5 hover:border-primary/30 transition-all shadow-lg inline-block w-full md:w-auto">
                                    <span className="text-6xl font-bold text-white/5 absolute -mt-10 -ml-4 z-0 pointer-events-none select-none">0{step.id}</span>
                                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                                    <p className="text-gray-400 text-sm relative z-10 max-w-xs mx-auto md:mx-0">{step.description}</p>
                                </div>
                            </div>

                            {/* Dot */}
                            <div className="relative z-10 w-12 h-12 rounded-full bg-dark border-4 border-primary shadow-[0_0_15px_rgba(255,23,68,0.5)] flex items-center justify-center shrink-0">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>

                            {/* Empty space for balance */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
