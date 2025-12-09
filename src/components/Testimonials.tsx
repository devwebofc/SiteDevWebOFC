import React from "react";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { Testimonial } from "../types";

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "CEO, TechStart",
      image: "https://picsum.photos/seed/user1/150/150",
      text: "A landing page criada pela DevWeb aumentou nossa conversão em 300% no primeiro mês. O retorno sobre o investimento foi imediato.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ana Silva",
      role: "Diretora de Marketing, FashionModa",
      image: "https://picsum.photos/seed/user2/150/150",
      text: "Site profissional, rápido e visualmente impactante. A equipe captou exatamente a essência moderna que precisávamos.",
      rating: 5,
    },
    {
      id: 3,
      name: "Roberto Costa",
      role: "Consultor Financeiro",
      image: "https://picsum.photos/seed/user3/150/150",
      text: "Atenção ao detalhe e suporte excepcional. Eles não apenas entregaram o site, mas me ensinaram a gerenciar o conteúdo.",
      rating: 5,
    },
    {
      id: 4,
      name: "Fernanda Lima",
      role: "Fundadora, EcoLife",
      image: "https://picsum.photos/seed/user4/150/150",
      text: "Transformaram nossa presença digital completamente. O design dark theme ficou incrível e super alinhado com o mercado tech.",
      rating: 4,
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-dark to-[#111] relative">
      <div className="container max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Prova Social</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">O que dizem nossos clientes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={0.1 * i}>
              <div className="h-full relative p-8 rounded-2xl bg-panel border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 group hover:shadow-[0_20px_40px_-15px_rgba(255,23,68,0.2)]">
                
                {/* Large quote mark in background */}
                <Quote className="absolute top-6 right-8 text-white/[0.03] w-20 h-20 group-hover:text-primary/10 transition-colors duration-500 transform group-hover:scale-110 rotate-12" />
                
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-gray-700 to-gray-900 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                     <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-2 border-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-primary transition-colors duration-300">{t.name}</h4>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{t.role}</p>
                  </div>
                </div>

                <div className="relative z-10 flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={`${i < t.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-800'} transition-colors`} />
                    ))}
                </div>

                <p className="relative z-10 text-gray-400 text-sm italic leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  "{t.text}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;