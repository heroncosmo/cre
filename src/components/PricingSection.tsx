
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('36');

  const plans = [
    {
      name: 'Plano Start',
      originalPrice: '29,88',
      price: '7,79',
      period: '/mês*',
      description: 'Para começar seu primeiro site',
      features: [
        '1 Site',
        '100 GB SSD',
        '1 Conta de Email',
        'Domínio Grátis',
        'Certificado SSL Grátis',
        'CloudFlare CDN',
        'Construtor Drag & Drop'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Plano Turbo',
      originalPrice: '59,88',
      price: '9,69',
      period: '/mês*',
      description: 'Para projetos que precisam de mais recursos',
      features: [
        'Sites Ilimitados',
        '150 GB SSD',
        'Contas de Email Ilimitadas',
        'Domínio Grátis',
        'Certificado SSL Grátis',
        'CloudFlare CDN',
        'Construtor Drag & Drop',
        'Backup Automático'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Plano Plus',
      originalPrice: '89,88', 
      price: '13,69',
      period: '/mês*',
      description: 'Para quem precisa de performance máxima',
      features: [
        'Sites Ilimitados',
        '200 GB SSD',
        'Contas de Email Ilimitadas',
        '2 Domínios Grátis',
        'Certificado SSL Grátis',
        'CloudFlare CDN',
        'Construtor Drag & Drop',
        'Backup Automático',
        'Suporte Prioritário'
      ],
      popular: true,
      color: 'yellow'
    },
    {
      name: 'Plano Ultra',
      originalPrice: '119,88',
      price: '23,69',
      period: '/mês*',
      description: 'Para empresas que querem o máximo',
      features: [
        'Sites Ilimitados', 
        'SSD Ilimitado',
        'Contas de Email Ilimitadas',
        '3 Domínios Grátis',
        'Certificado SSL Grátis',
        'CloudFlare CDN',
        'Construtor Drag & Drop',
        'Backup Automático',
        'Suporte Prioritário',
        'IP Dedicado'
      ],
      popular: false,
      color: 'blue'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha a hospedagem de sites ideal para você
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Todos os planos incluem recursos premium e suporte especializado para seu sucesso online
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <button
              onClick={() => setBillingCycle('12')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === '12' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              12 meses
            </button>
            <button
              onClick={() => setBillingCycle('36')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === '36' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              36 meses (Mais popular)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
                plan.popular 
                  ? 'border-yellow-400 relative transform -translate-y-2' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-1">
                    <div className="text-gray-400 line-through text-sm">
                      De R$ {plan.originalPrice}/mês por
                    </div>
                    <div className="text-3xl font-bold text-gray-900">
                      R$ {plan.price}
                      <span className="text-base text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg hover:shadow-xl'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Contratar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            *Preços promocionais válidos para novos clientes no plano de 36 meses. 
            Após o período, renova pelo valor regular.
          </p>
        </div>
      </div>
    </section>
  );
};
