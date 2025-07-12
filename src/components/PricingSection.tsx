import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Check, ArrowDown, ArrowUp } from 'lucide-react';
import pricingConfig from '../config/pricing';

export const PricingSection = () => {
  const navigate = useNavigate();
  const [allExpanded, setAllExpanded] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<'1mes' | '6meses' | '1ano' | '2anos' | '3anos'>('3anos');

  const toggleExpandAll = () => {
    setAllExpanded(prev => !prev);
  };

  const getPlanUrl = (planName: string) => {
    return planName.toLowerCase().replace(' ', '-');
  };

  const getPeriodLabel = (period: string) => {
    switch (period) {
      case '1mes': return '1 mês';
      case '6meses': return '6 meses';
      case '1ano': return '1 ano';
      case '2anos': return '2 anos';
      case '3anos': return '3 anos';
      default: return period;
    }
  };

  const formatCurrency = (value: string) => {
    return `R$ ${value.replace('.', ',')}`;
  };

  const baseFeatures = [
    'Hospedagem <strong>Gerenciada e Otimizada</strong>',
    'Certificado de Segurança <strong>SSL Grátis</strong>',
    'Seu site <strong>rápido e estável</strong> (Uptime 99.9%)',
    'Backups de Segurança <strong>Diários</strong>',
    '<strong>Migração grátis</strong> e ilimitada',
    'Atendimento <strong>online 24h</strong>',
    'Instalação de apps em <strong>poucos cliques</strong>',
    'Templates grátis para todos os tipos de projetos',
    'Criação de <strong>Landing Pages</strong> de alta conversão',
    'Ferramentas de <strong>IA</strong> para acelerar seu marketing',
    'Textos gerados por <strong>IA</strong>',
    'Plataforma pronta para <strong>Lojas Virtuais</strong>',
    'Acesso a plugins de <strong>SEO e Marketing</strong>',
    'Banco de Imagens <strong>Grátis</strong>',
    'Integração com <strong>meios de pagamento</strong>',
    '<strong>Botão de WhatsApp</strong> integrado ao site',
    'Integração com <strong>Google Analytics</strong>',
    'Garantia de <strong>30 dias</strong> para reembolso',
    'Data center monitorado <strong>24h por dia</strong>'
  ];

  // Plan-specific features mapping
  const planSpecificFeatures = {
    'plano-start': [
      'Hospedagem para <strong>1 domínio</strong>',
      'Criador de Sites <strong>Place Studio</strong> com IA <strong>fácil e rápido</strong>',
      '<strong>50 GB</strong> de Armazenamento SSD',
      '<strong>3 Contas de E-mail</strong> Profissional',
      '<strong>Apenas pagamento anual</strong> (1, 2 ou 3 anos)'
    ],
    'plano-p': [
      'Hospedagem para <strong>1 domínio</strong>',
      'Criador de Sites <strong>Place Studio</strong> com IA <strong>fácil e rápido</strong>',
      '<strong>100 GB</strong> de Armazenamento SSD',
      'Contas de E-mail <strong>Ilimitadas</strong>',
      '<strong>CDN Grátis</strong> para alta performance',
      '<strong>Pagamento flexível:</strong> Mensal, Semestral ou Anual'
    ],
    'plano-m': [
      'Hospedagem para <strong>sites ilimitados</strong>',
      'Criador de Sites <strong>Place Studio</strong> com IA <strong>fácil e rápido</strong>',
      '<strong>100 GB</strong> de Armazenamento SSD',
      'Contas de E-mail <strong>Ilimitadas</strong>',
      '<strong>CDN Grátis</strong> com servidores globais',
      'Suporte Técnico <strong>Prioritário</strong>',
      '<strong>Pagamento flexível:</strong> Mensal, Semestral ou Anual'
    ],
    'plano-turbo': [
      'Hospedagem para <strong>sites ilimitados</strong>',
      'Criador de Sites <strong>Place Studio</strong> com IA <strong>fácil e rápido</strong>',
      '<strong>150 GB</strong> de Armazenamento SSD',
      'Contas de E-mail <strong>Ilimitadas</strong>',
      '<strong>Performance Turbo</strong> (Servidores Premium)',
      'Suporte <strong>VIP 24/7</strong> com especialistas',
      '<strong>Pagamento flexível:</strong> Mensal, Semestral ou Anual'
    ]
  };

  const planDescriptions = {
    'plano-start': 'O primeiro passo para iniciar sua jornada digital.',
    'plano-p': 'Feito para quem está começando.',
    'plano-m': 'Ideal para continuar crescendo.',
    'plano-turbo': 'Perfeito para sites com alto tráfego.'
  };

  // Generate plans dynamically from pricing config
  const plans = Object.entries(pricingConfig).map(([planKey, planData]) => {
    const currentTier = planData.tiers.find(tier => tier.period === selectedPeriod);
    if (!currentTier) return null;

    const features = [
      ...planSpecificFeatures[planKey as keyof typeof planSpecificFeatures] || [],
      ...(currentTier.freeDomains > 0 ? [
        currentTier.freeDomains === 1 
          ? '<strong>Domínio Grátis</strong> por 1 ano'
          : `<strong>${currentTier.freeDomains} Domínios Grátis</strong> por 1 ano`
      ] : []),
      ...baseFeatures
    ];

    return {
      key: planKey,
      name: planData.name,
      description: planDescriptions[planKey as keyof typeof planDescriptions] || '',
      price: currentTier.price,
      renewalPrice: currentTier.renewalPrice,
      discount: currentTier.discount,
      total: currentTier.total,
      savings: currentTier.savings,
      freeDomains: currentTier.freeDomains,
      features,
      popular: planKey === 'plano-m' // Keep M as popular
    };
  }).filter(Boolean);

  const initialFeaturesCount = 8;

  return (
    <section id="pricing" className="pt-8 md:pt-12 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Escolha a hospedagem de sites ideal para você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg border border-gray-200 p-6 flex flex-col h-full ${plan.popular ? 'border-blue-500 border-2' : ''}`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-sm font-bold text-center py-1 px-4 rounded-t-md -mt-6 -mx-6 mb-4">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-md">
                  {plan.discount}
                </span>
                {plan.freeDomains > 0 && (
                  <span className="ml-2 inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-md">
                    Domínio Grátis
                  </span>
                )}
              </div>

              <div className="mb-2">
                <span className="text-4xl font-bold text-blue-600">{formatCurrency(plan.price)}</span>
                <span className="text-gray-600 text-sm">/mês</span>
              </div>
              
              <p className="text-xs text-gray-400 mb-2">
                {formatCurrency(plan.total)} por 3 anos
              </p>
              
              <p className="text-xs text-green-600 font-medium mb-6">
                Economize {formatCurrency(plan.savings)}
              </p>

              <Button
                size="lg"
                className={`w-full font-bold py-6 text-lg rounded-md mb-6 ${
                  plan.popular 
                    ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
                onClick={() => navigate(`/planos/${getPlanUrl(plan.name)}`)}
              >
                Começar agora
              </Button>

              <div className="space-y-3 text-sm flex-grow">
                {(allExpanded
                  ? plan.features
                  : plan.features.slice(0, initialFeaturesCount)
                ).map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 text-center">
                <button
                  onClick={toggleExpandAll}
                  className="text-blue-600 font-semibold text-sm hover:underline flex items-center justify-center w-full"
                >
                  {allExpanded ? 'Ocultar recursos' : 'Ver mais recursos'}
                  {allExpanded ? (
                    <ArrowUp className="w-4 h-4 ml-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 ml-1" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs">
            *Condições para preços promocionais.
          </p>
        </div>
      </div>
    </section>
  );
};
