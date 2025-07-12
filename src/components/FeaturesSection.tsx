
import React from 'react';
import { Shield, Zap, Globe, HeadphonesIcon, Database, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

export const FeaturesSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Segurança Máxima',
      description: 'Certificado SSL gratuito, firewall avançado e backups automáticos para proteger seu site.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Otimizada',
      description: 'Servidores SSD de alta velocidade e CDN global para carregamento ultra-rápido.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Domínio Grátis',
      description: 'Registre seu domínio gratuitamente no primeiro ano com qualquer plano de hospedagem.'
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-purple-500" />,
      title: 'Suporte 24/7',
      description: 'Equipe especializada disponível 24 horas por dia, 7 dias por semana para te ajudar.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Backup Automático',
      description: 'Seus dados são protegidos com backups automáticos diários e restauração fácil.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Uptime Garantido',
      description: '99.9% de uptime garantido com SLA e infraestrutura redundante confiável.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={cn("text-center mb-16 opacity-100 translate-y-0")}> 
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            Soluções para Potencializar seu Projeto
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recursos premium inclusos em todos os planos para garantir que seu site tenha 
            a melhor performance, segurança e suporte do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn("opacity-100 translate-y-0")}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

          {/* Technology Image with Frosted Glass Effect */}
          <div className={cn("relative opacity-100 scale-100")}> 
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=1000&fit=crop"
                alt="Empreendedora celebrando o sucesso de sua loja online"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Construa seu Futuro Digital
                </h3>
                <p className="text-gray-800 font-medium">
                  Ferramentas poderosas e intuitivas para transformar suas ideias em realidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
