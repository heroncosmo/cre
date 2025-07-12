import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Shield, Globe, Clock, Check } from 'lucide-react';

export const MobileBenefitsSection = () => {
  const isMobile = useIsMobile();

  // Só mostra no mobile
  if (!isMobile) return null;

  const benefits = [
    {
      icon: Globe,
      title: 'Domínio grátis por 1 ano',
      description: 'Incluso nos planos anuais'
    },
    {
      icon: Shield,
      title: 'SSL grátis e ilimitado',
      description: 'Segurança garantida'
    },
    {
      icon: Clock,
      title: 'Suporte especialista 24h',
      description: 'Atendimento sempre disponível'
    },
    {
      icon: Check,
      title: 'Garantia de 30 dias',
      description: 'Reembolso sem complicações'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-6 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            Tudo incluído na hospedagem
          </h3>
          <p className="text-sm text-gray-600">
            Até <strong>2 domínios grátis</strong> nos planos anuais
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm border border-gray-100"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-xs leading-tight">
                      {benefit.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            ✓ Migração grátis ✓ Backup diário ✓ CDN grátis ✓ SSL incluído
          </p>
        </div>
      </div>
    </section>
  );
};
