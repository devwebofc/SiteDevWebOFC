
import React from "react";
import { ArrowRight, Star, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

interface Props {
  onNavigate: (page: 'home' | 'quote' | 'privacy', hash?: string) => void;
}

const Hero = ({ onNavigate }: Props) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
       <div className="absolute inset-0 bg-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* Aurora Background Effects - Enhanced */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob z-0"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-32 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000 z-0"></div>

      {/* Particle Animation */}
      <ParticleBackground />

      <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div 
             onClick={() => onNavigate('quote')}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-300 text-sm font-medium">Disponível para novos projetos</span>
             <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Headline */}
          <h1 className="font-poppins font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight">
            Crie o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-purple-600">Extraordinário</span> <br className="hidden md:block" />
            no Mundo Digital.
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Não somos apenas uma agência. Somos seus parceiros estratégicos na construção de interfaces que vendem, engajam e escalam seu negócio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto mb-16">
            <button
              onClick={() => onNavigate('quote')}
              className="relative px-8 py-4 bg-primary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group overflow-hidden shadow-[0_0_40px_rgba(255,23,68,0.3)] hover:shadow-[0_0_60px_rgba(255,23,68,0.5)] cursor-pointer"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <Zap className="w-5 h-5 relative z-10 fill-current group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
            <button
              onClick={() => onNavigate('home', '#portfolio')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center gap-2"
            >
              Ver Portfolio
            </button>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-10 border-t border-white/5 w-full justify-center animate-fade-in-up">
             {/* Avatars */}
             <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                    {[10, 12, 33, 45].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gray-800 overflow-hidden relative">
                             <img src={`https://picsum.photos/seed/${i}/100`} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center text-xs font-bold text-white relative z-10">
                        +100
                    </div>
                </div>
                <div className="text-left">
                    <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-gray-400 text-xs"><span className="text-white font-bold">4.9/5</span> de satisfação dos clientes</p>
                </div>
             </div>
             
             <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

             {/* Tech Stack / Trusted By Text */}
             <div className="flex gap-6 text-gray-600 font-bold text-sm md:text-base uppercase tracking-widest">
                <span className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-default"><CheckCircle2 className="w-4 h-4 text-primary" /> Alta Performance</span>
                <span className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-default"><CheckCircle2 className="w-4 h-4 text-primary" /> SEO Otimizado</span>
             </div>
          </div>

        </motion.div>
      </div>
      
      {/* CSS for specific animations not in Tailwind config */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;