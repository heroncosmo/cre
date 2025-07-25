import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o criador de sites com IA?",
    answer: "Nosso criador de sites com IA analisa seu negócio e cria automaticamente um site profissional em minutos. Basta responder algumas perguntas sobre seu negócio e a IA gera conteúdo, design e estrutura otimizados para conversão."
  },
  {
    question: "Posso personalizar o site criado pela IA?",
    answer: "Sim! Após a IA criar seu site, você tem acesso completo ao editor visual para personalizar cores, fontes, imagens, conteúdo e layout. É fácil e intuitivo, sem necessidade de conhecimento técnico."
  },
  {
    question: "Qual a diferença entre os planos?",
    answer: "O Plano Start é ideal para quem está começando, com 1 domínio e 50GB. O Plano P oferece mais recursos com 100GB e CDN. O Plano M permite sites ilimitados e suporte prioritário. O Plano Turbo é para sites com alto tráfego, com 150GB e servidores premium."
  },
  {
    question: "O domínio está incluído no preço?",
    answer: "Sim! Todos os planos incluem 1 ano de domínio grátis (.com, .com.br, .online, etc). O Plano Turbo inclui 2 domínios grátis por 1 ano. Após o primeiro ano, você pode renovar o domínio por uma taxa anual."
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Você tem 30 dias para testar nossos serviços. Se não ficar 100% satisfeito, devolvemos seu dinheiro integralmente, sem perguntas. É nossa forma de mostrar confiança na qualidade dos nossos serviços."
  },
  {
    question: "Vocês fazem migração de sites existentes?",
    answer: "Sim! Nossa equipe especializada faz a migração completa do seu site atual gratuitamente. Incluímos transferência de arquivos, banco de dados, emails e configurações. Tudo é feito com segurança e sem downtime."
  },
  {
    question: "Qual o tempo de suporte?",
    answer: "Oferecemos suporte técnico 24/7 através de chat ao vivo, email e telefone. Nossa equipe de especialistas está sempre pronta para ajudar com qualquer dúvida ou problema técnico."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Você pode cancelar sua assinatura a qualquer momento através do painel de controle. Não há taxas de cancelamento ou multas. Seu site permanecerá ativo até o final do período contratado."
  },
  {
    question: "Os sites são responsivos?",
    answer: "Todos os sites criados pela nossa IA são 100% responsivos e otimizados para dispositivos móveis. Eles se adaptam automaticamente a smartphones, tablets e desktops, garantindo a melhor experiência em qualquer dispositivo."
  },
  {
    question: "Vocês oferecem certificado SSL?",
    answer: "Sim! Todos os planos incluem certificado SSL gratuito, garantindo que seu site seja seguro e confiável. O SSL é instalado automaticamente e renovado sem custos adicionais."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phone = '17981679818';
    const message = 'Olá! Gostaria de falar com um especialista sobre os planos de hospedagem.';
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem com texto sobreposto */}
          <div className="relative opacity-100 scale-100">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/paginainicial6.png" 
                alt="Especialista atendendo dúvidas sobre hospedagem" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Tire Todas as Suas Dúvidas
                </h3>
                <p className="text-white/90 font-medium">
                  Nossa equipe de especialistas está pronta para responder todas as suas perguntas sobre hospedagem e criação de sites.
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo FAQ */}
          <div className="space-y-8 opacity-100 translate-y-0">
            <div className="text-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-blue-600 mb-4">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 17h.01"></path>
              </svg>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-6">
                Tire suas dúvidas sobre nossos serviços de hospedagem e criador de sites com IA. Aqui você encontra as respostas para as principais perguntas.
              </p>
            </div>

            <div className="space-y-4">
              {faqData.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={openWhatsApp}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Falar com Especialista
                </button>
                <button 
                  onClick={scrollToPricing}
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Ver Todos os Recursos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 