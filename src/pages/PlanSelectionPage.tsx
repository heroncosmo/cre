import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Check, ArrowLeft } from 'lucide-react';
import { plans } from '../lib/plans';
import type { Plan, PlanOption } from '../lib/plans';

export default function PlanSelectionPage() {
  const { planName } = useParams<{ planName: string }>();
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('3anos');

  const currentPlan = plans.find(p => p.key === planName);

  if (!currentPlan) {
    return (
      <div className="flex items-center justify-center h-screen">
        Plano não encontrado.
      </div>
    );
  }

  const selectedOption = currentPlan.options.find(o => o.period === selectedPeriod);

  if (!selectedOption) {
    // Fallback to the first option if the selected one is not available for the plan
    const firstOption = currentPlan.options[0];
    if (firstOption) {
      setSelectedPeriod(firstOption.period);
    } else {
      return <div>Opções de período não encontradas.</div>;
    }
  }

  const getPeriodLabel = (period: string) => {
    const labels: { [key: string]: string } = {
      '1mes': '1 Mês',
      '6meses': '6 Meses',
      '1ano': '1 Ano',
      '2anos': '2 Anos',
      '3anos': '3 Anos',
    };
    return labels[period] || period;
  };

  const handleContinueToCheckout = () => {
    navigate(`/checkout?plan=${planName}&period=${selectedPeriod}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Padronizado */}
      <header className="bg-white border-b border-gray-200 w-full">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <div 
              className="text-2xl font-bold text-gray-800 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Place
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/#pricing')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver outros planos</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-7xl py-12">
        {/* Título Persuasivo */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">
          Site profissional em minutos com nossa <span className="text-blue-600">IA</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl max-w-3xl mx-auto text-gray-600">
          Crie sites profissionais em minutos, sem código. Escolha o ciclo de pagamento ideal e comece hoje mesmo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna 2: Escolha o Período */}
          <div className="order-1 lg:order-2 lg:col-span-1">
            <div className="lg:bg-white lg:rounded-2xl lg:shadow-sm lg:border lg:border-gray-100 lg:p-6 h-full">
              <div className="space-y-4">
                {currentPlan.options.map((option, idx) => (
                  <div
                    key={option.period}
                    className={`relative w-full flex flex-row justify-between items-start gap-2 bg-white border-2 rounded-xl p-3 transition-all overflow-visible ${
                      selectedPeriod === option.period
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => setSelectedPeriod(option.period)}
                  >
                    {idx === 0 && (
                      <span className="absolute -top-2 right-2 text-[10px] bg-[#3b82f6] text-white px-1.5 py-0.5 rounded font-bold z-10">RECOMENDADO</span>
                    )}
                    {/* Lado esquerdo */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedPeriod === option.period
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedPeriod === option.period && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <div className="font-semibold text-gray-900 text-base">{getPeriodLabel(option.period)}</div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">{option.discount}</span>
                      </div>
                      <div className="text-xs text-gray-400 line-through">R$ {option.originalPrice}</div>
                      <div className="text-3xl font-extrabold text-blue-600 leading-tight">R$ {option.price}<span className="text-base font-normal text-blue-600">/mês</span></div>
                      <div className="text-xs text-gray-500">R$ {option.totalPrice} por {getPeriodLabel(option.period).toLowerCase()}</div>
                      <div className="text-sm font-bold text-green-700 bg-green-50 px-2 py-1 rounded mt-1">Economize até R$ {option.savings}</div>
                    </div>
                    {/* Lado direito */}
                    <div className="flex-1 flex flex-col items-end gap-1">
                      <div className="flex flex-wrap gap-1 mt-1 justify-end">
                        {/* Features principais, padronizadas */}
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold whitespace-nowrap">Criador de Site com IA</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold whitespace-nowrap">Hospedagem</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold whitespace-nowrap">
                          {(() => {
                            const domFeature = currentPlan.features.find(f => f.toLowerCase().includes('domínio grátis'));
                            if (domFeature) {
                              const match = domFeature.match(/(\d+)\s*domínios?/i);
                              if (match) return `${match[1]} domínio${match[1] === '1' ? '' : 's'} grátis`;
                              if (domFeature.includes('1 ano')) return '1 domínio grátis';
                            }
                            return 'Domínio grátis';
                          })()}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-semibold whitespace-nowrap">
                          {(() => {
                            const emailFeature = currentPlan.features.find(f => f.toLowerCase().includes('conta') && f.toLowerCase().includes('e-mail'));
                            if (emailFeature) {
                              const match = emailFeature.match(/(\d+)\s*contas?/i);
                              if (match) return `${match[1]} contas de e-mail`;
                              if (emailFeature.toLowerCase().includes('ilimitada')) return 'Contas de e-mail';
                            }
                            return 'Conta de e-mail';
                          })()}
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-xs underline text-blue-600 font-medium mt-1"
                        onClick={e => {
                          e.stopPropagation();
                          const details = document.getElementById('plan-details');
                          if (details) details.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        ver mais
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 1: O que está incluído */}
          <div className="order-2 lg:order-1 lg:col-span-1" id="plan-details">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">O plano <span className="text-blue-600 font-bold">{currentPlan.name}</span> inclui:</h3>
              <div className="space-y-3">
                {currentPlan.features.slice(0, 8).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 3: Resumo e CTA */}
          <div className="order-3 lg:order-3 lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-sm font-medium text-blue-700 mb-2">Você pagará por mês</div>
                <div className="text-5xl font-extrabold text-blue-600 mb-1">
                  R$ {selectedOption?.price}
                </div>
                <div className="text-sm text-gray-500">Total: R$ {selectedOption?.totalPrice} | {selectedOption?.discount} OFF</div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-xs">
                  <Check className="w-3 h-3 text-green-500" />
                  <span className="text-gray-700">Domínio grátis por 1 ano</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Check className="w-3 h-3 text-green-500" />
                  <span className="text-gray-700">SSL grátis e ilimitado</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Check className="w-3 h-3 text-green-500" />
                  <span className="text-gray-700">Suporte especialista 24h</span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <Check className="w-3 h-3 text-green-500" />
                  <span className="text-gray-700">Garantia de 30 dias</span>
                </div>
              </div>

              <Button
                onClick={handleContinueToCheckout}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 text-lg rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
              >
                Continuar para o Pagamento
              </Button>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                Ativação imediata após o pagamento.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Fixed CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-bold text-gray-900">{getPeriodLabel(selectedPeriod)}</div>
              <div className="text-sm text-green-600 font-bold">{selectedOption?.discount}</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-blue-600">R$ {selectedOption?.price}/mês</div>
              <div className="text-xs text-gray-500">Total: R$ {selectedOption?.totalPrice}</div>
            </div>
          </div>
          <Button
            onClick={handleContinueToCheckout}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 text-lg rounded-xl"
          >
            Continuar
          </Button>
        </div>
      </div>
      <div className="lg:hidden h-32"></div> {/* Spacer for mobile */}
    </div>
  );
}
