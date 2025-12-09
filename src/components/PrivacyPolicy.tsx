import React from "react";
import { ArrowLeft, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onBack: () => void;
}

const PrivacyPolicy = ({ onBack }: Props) => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-dark">
      <div className="container max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-panel border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Shield size={200} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
             <Shield className="text-primary" /> Política de Privacidade
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Introdução</h3>
              <p>
                A DevWeb Agency valoriza a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site e serviços. Ao acessar nosso site, você concorda com os termos descritos nesta política.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Coleta de Dados</h3>
              <p>
                Coletamos informações que você nos fornece diretamente, principalmente através do formulário de orçamento e contato. Isso inclui:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone / WhatsApp</li>
                <li>Informações sobre seu projeto ou empresa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. Uso das Informações</h3>
              <p>
                Utilizamos seus dados para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                <li>Responder a solicitações de orçamento e contato.</li>
                <li>Melhorar nossos serviços e atendimento.</li>
                <li>Enviar comunicações sobre atualizações, caso você tenha optado por recebê-las.</li>
              </ul>
              <p className="mt-2">Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing sem seu consentimento explícito.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Segurança</h3>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Cookies</h3>
              <p>
                Nosso site pode utilizar cookies para melhorar a experiência do usuário, analisar o tráfego e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">6. Seus Direitos (LGPD)</h3>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a solicitar acesso, correção ou exclusão de seus dados pessoais armazenados por nós. Para exercer esses direitos, entre em contato através do e-mail: devwebofc@gmail.com.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-gray-500">
                Última atualização: 20 de Maio de 2024.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;