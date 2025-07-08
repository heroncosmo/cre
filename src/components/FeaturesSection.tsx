
import React from 'react';
import { Shield, Zap, Globe, HeadphonesIcon, Database, Lock } from 'lucide-react';

export const FeaturesSection = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções para potencializar seu projeto
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recursos premium inclusos em todos os planos para garantir que seu site tenha 
            a melhor performance, segurança e suporte do mercado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              HostGator tem tudo para você começar a crescer
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Seja seu primeiro site ou centésimo projeto, oferecemos tudo que você precisa 
              para ter sucesso online com confiança e tranquilidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Suporte Especializado</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>30 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
