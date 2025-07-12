import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Check, Shield, Rocket, Zap, Users } from 'lucide-react';

export const HeroSection = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    { main: 'Crie seu', highlight: 'site profissional' },
    { main: 'Crie seu', highlight: 'site empresarial' },
    { main: 'Crie seu', highlight: 'site corporativo' },
    { main: 'Crie seu', highlight: 'site institucional' },
    { main: 'Crie sua', highlight: 'loja virtual' },
    { main: 'Crie seu', highlight: 'site personalizado' }
  ];

  const weights = [3, 3, 3, 3, 1, 1];

  useEffect(() => {
    const textInterval = setInterval(() => {
      const totalWeight = weights.reduce((a, b) => a + b, 0);
      let random = Math.random() * totalWeight;
      
      for (let i = 0; i < weights.length; i++) {
        random -= weights[i];
        if (random <= 0) {
          setCurrentTextIndex(i);
          break;
        }
      }
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4 text-left">
            <div className="text-blue-600 font-bold uppercase tracking-wider text-xs md:text-base">
              Criação de Sites com IA
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {rotatingTexts[currentTextIndex].main}{' '}
              <span className="text-blue-600">{rotatingTexts[currentTextIndex].highlight}</span>
              <br />
              em Minutos
            </h1>
              
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-6 gap-y-2 text-gray-700 font-medium pt-1">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Hospedagem Grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Migração Grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Suporte 24/7</span>
              </div>
            </div>

            <div className="pt-3 space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-lg w-full sm:w-auto"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    pricingSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Aproveitar Oferta
                </Button>
                <div className="text-left">
                  <p className="text-gray-600 text-sm">
                    A partir de <span className="text-xl font-bold text-blue-600">R$ 7,79/mês*</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    + 2 Domínios Grátis no plano anual
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center space-x-2 text-xs text-gray-600 pt-1">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Garantia de 30 dias para reembolso</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-4 lg:mt-0">
            <img 
              src="/images/paginaincial5.png" 
              alt="Criação de site com IA" 
              className="w-full max-w-sm mx-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Trust Elements - reduced margin */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-left text-sm">Site em Minutos</p>
                <p className="text-xs text-gray-600 text-left">Criação rápida com IA</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-left text-sm">Desempenho Superior</p>
                <p className="text-xs text-gray-600 text-left">Hospedagem veloz</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-left text-sm">+12.8k Clientes</p>
                <p className="text-xs text-gray-600 text-left">Junte-se a nós!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
