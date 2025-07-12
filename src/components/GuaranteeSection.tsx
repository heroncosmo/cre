
import React from 'react';
import { Button } from './ui/button';
import { Shield, Check, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const GuaranteeSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guarantees = [
    'Reembolso total em 30 dias',
    'Uptime de 99.9%',
    'Suporte especializado 24/7',
    'Migração de site gratuita'
  ];

  return (
    <section id="guarantee" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with Frosted Glass Effect */}
          <div className={cn("relative opacity-100 scale-100")}> 
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/atendimentoplaceai.png"
                alt="Mulher de negócios feliz com a segurança e garantia do serviço"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Sua Satisfação ou seu Dinheiro de Volta
                </h3>
                <p className="text-white/90 font-medium">
                  Temos tanta confiança na nossa qualidade que oferecemos a melhor garantia do mercado.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Content */}
          <div className={cn("space-y-8 opacity-100 translate-y-0")}> 
            <div className="text-left">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
                Garantia de 30 Dias
              </h2>
              <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-6">
                Contrate qualquer plano e teste nossos serviços por 30 dias. Se não ficar 100% satisfeito, devolvemos seu dinheiro. Simples assim, sem perguntas.
              </p>
            </div>

            <div className="space-y-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">{guarantee}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToPricing}
              size="lg"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
            >
              Começar sem Risco
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
