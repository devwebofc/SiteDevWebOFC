import React, { useState } from "react";
import { Send, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onBack: () => void;
}

const QuoteForm = ({ onBack }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/devwebofc@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-dark">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column - Info */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Vamos criar algo <span className="text-primary">incrível</span>.
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas para discutir seu projeto.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Proposta personalizada</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Análise de concorrência</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>Estratégia de UX/UI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form or Success Message */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-panel border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                    <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                        Recebemos seus dados com sucesso. Em breve nossa equipe entrará em contato com você.
                    </p>
                    <button 
                        onClick={onBack}
                        className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-colors"
                    >
                        Voltar para o Site
                    </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value="Novo Pedido de Orçamento - DevWeb" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome Completo</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Seu nome"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="whatsapp" className="text-sm font-medium text-gray-300">WhatsApp</label>
                        <input 
                        type="tel" 
                        id="whatsapp" 
                        name="whatsapp" 
                        required
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="(00) 00000-0000"
                        />
                    </div>
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">E-mail Corporativo</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="voce@empresa.com"
                    />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-gray-300">Tipo de Projeto</label>
                        <select 
                        id="service" 
                        name="service" 
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                        >
                        <option value="Landing Page">Landing Page</option>
                        <option value="Site Institucional">Site Institucional</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Sistema Web">Sistema Web</option>
                        <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="timeline" className="text-sm font-medium text-gray-300">Quando precisa estar no ar?</label>
                        <select 
                        id="timeline" 
                        name="timeline" 
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                        >
                        <option value="Urgente (1-2 semanas)">Urgente (1-2 semanas)</option>
                        <option value="Normal (3-4 semanas)">Normal (3-4 semanas)</option>
                        <option value="Planejado (1-2 meses)">Planejado (1-2 meses)</option>
                        <option value="Sem pressa (3+ meses)">Sem pressa (3+ meses)</option>
                        </select>
                    </div>
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Detalhes do Projeto</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Conte um pouco sobre seus objetivos..."
                    ></textarea>
                    </div>

                    <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(255,23,68,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            Enviar Solicitação
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                    </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;