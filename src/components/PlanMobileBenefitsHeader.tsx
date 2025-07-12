import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Shield, Globe, Clock, Check } from 'lucide-react';

interface PlanMobileBenefitsHeaderProps {
  planName?: string;
}

export const PlanMobileBenefitsHeader = ({ planName }: PlanMobileBenefitsHeaderProps) => {
  const isMobile = useIsMobile();

  // Só mostra no mobile
  if (!isMobile) return null;

  // Determina quantos domínios grátis baseado no plano
  const getDomainInfo = () => {
    if (planName === 'plano-turbo') {
      return '2 domínios grátis por 1 ano';
    }
    return 'Domínio grátis por 1 ano';
  };

  const benefits = [
    {
      icon: Globe,
      text: getDomainInfo()
    },
    {
      icon: Shield,
      text: 'SSL grátis e ilimitado'
    },
    {
      icon: Clock,
      text: 'Suporte especialista 24h'
    },
    {
      icon: Check,
      text: 'Garantia de 30 dias'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-6">
      <div className="text-center mb-3">
        <p className="text-sm font-semibold text-blue-700">
          🎁 Tudo incluído no seu plano
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div 
              key={index}
              className="flex items-center space-x-2"
            >
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-700 leading-tight">
                {benefit.text}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-3">
        <p className="text-xs text-blue-600 font-medium">
          + Migração grátis + Backup diário + Ativação imediata
        </p>
      </div>
    </div>
  );
};
