
import React from 'react';
import { Zap, Globe, Shield, Database, Gauge, Server } from 'lucide-react';
import { cn } from '../lib/utils';

export const PerformanceSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const performanceFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Velocidade Extrema',
      description: 'Infraestrutura com SSDs e cache avançado para máxima performance.',
      stats: '3x mais rápido'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'CDN Global Gratuito',
      description: 'Rede de distribuição de conteúdo que acelera seu site em todo o mundo.',
      stats: 'CDN em 200+ países'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Armazenamento SSD',
      description: 'Discos de alta performance que garantem leitura e escrita 10x mais rápidas.',
      stats: '10x mais rápido'
    }
  ];

  const techSpecs = [
    { label: 'Uptime Garantido', value: '99.9%' },
    { label: 'Tempo de Resposta', value: '<200ms' },
    { label: 'Largura de Banda', value: 'Ilimitada' },
    { label: 'Transferência Mensal', value: 'Ilimitada' }
  ];

  return (
    <section id="performance" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={cn("text-center mb-16 opacity-100 translate-y-0")}> 
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            Velocidade e Estabilidade de Nível Mundial
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nossa infraestrutura foi projetada para oferecer máxima performance e confiabilidade, 
            garantindo que seu site esteja sempre no ar e funcionando perfeitamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Technology Image with Frosted Glass Effect */}
          <div className={cn("relative lg:order-last opacity-100 scale-100")}> 
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop"
                alt="Executiva confiante trabalhando com tecnologia moderna"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Performance que te dá Paz
                </h3>
                <p className="text-gray-800 font-medium">
                  Concentre-se no seu negócio, enquanto garantimos que seu site seja ultrarrápido.
                </p>
              </div>
            </div>
          </div>

          {/* Performance Features */}
          <div className="space-y-8">
            {performanceFeatures.map((feature, index) => (
              <div
                key={index}
                className={cn("bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-100 translate-x-0")}
              >
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-3 bg-gray-100 rounded-xl shadow-sm">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {feature.stats}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
