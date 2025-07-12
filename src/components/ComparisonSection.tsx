import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const ComparisonSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const comparisonData = [
    {
      feature: 'Site',
      place: 'Rápido, intuitivo e com IA para criar em minutos',
      others: 'Lentos, difíceis de navegar e exigem conhecimento técnico',
    },
    {
      feature: 'Configurações',
      place: 'Painel de controle simples e instalação de ferramentas em poucos cliques',
      others: 'Complicadas, confusas e com dezenas de menus',
    },
    {
      feature: 'Suporte',
      place: 'Humanizado, rápido e disponível 24h para todos os planos',
      others: 'Via chat, com horas de espera e respostas automáticas',
    },
    {
      feature: 'Design & Personalização',
      place: 'Design profissional com templates modernos e 100% personalizável',
      others: 'Design padrão, com poucas e limitadas alterações',
    },
    {
      feature: 'Marketing & Vendas',
      place: 'Ferramentas de SEO e IA para ajudar você a vender mais',
      others: 'Recursos básicos, exigindo contratação de plugins e ferramentas extras',
    },
    {
      feature: 'Preço',
      place: 'Planos acessíveis e transparentes, sem surpresas na fatura',
      others: 'Preços que aumentam e taxas escondidas',
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-100 translate-y-0")}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            Por que Escolher a Place?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja por que somos a escolha número um para o seu sucesso online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={cn("opacity-100 translate-x-0")}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-3">
                <div className="p-6 font-bold text-gray-800 self-center">Recurso</div>
                <div className="p-6 font-bold text-white text-center bg-blue-600">
                  <span className="text-2xl font-bold">Place</span>
                </div>
                <div className="p-6 font-bold text-gray-800 text-center">Outras Plataformas</div>
              </div>

              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 border-t border-gray-200">
                  <div className="p-6 font-semibold text-gray-900 self-center">{item.feature}</div>
                  <div className="p-6 bg-blue-50/50 text-blue-800 text-center flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.place}</span>
                  </div>
                  <div className="p-6 text-gray-600 text-center flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{item.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Image with Frosted Glass Effect */}
          <div className={cn("relative opacity-100 scale-100")}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Equipe de empreendedores celebrando resultados"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  A Escolha Certa para Crescer
                </h3>
                <p className="text-gray-800 font-medium">
                  Junte-se a milhares de empreendedores que confiam na nossa plataforma para ter sucesso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
