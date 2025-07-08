
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Shield, Zap, HeadphonesIcon } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg">
              <Star className="w-5 h-5 mr-2" />
              OFERTA LIMITADA - ATÉ 74% OFF
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Vem para a Place e tenha<br />
              <span className="text-yellow-300">tudo para seu sucesso!</span>
            </h2>
            
            <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
              Junte-se a mais de 50.000 empreendedores que escolheram a Place 
              para transformar suas ideias em negócios de sucesso online.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold">Performance</div>
              <div className="text-blue-100 text-sm">3x mais rápido</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold">Segurança</div>
              <div className="text-blue-100 text-sm">SSL + Firewall</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <HeadphonesIcon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold">Suporte</div>
              <div className="text-blue-100 text-sm">24/7 Especializado</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold">Garantia</div>
              <div className="text-blue-100 text-sm">30 dias</div>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-blue-100">Comece hoje mesmo por apenas</div>
              <div className="text-5xl font-bold text-white">
                R$ 7,79<span className="text-2xl text-blue-100">/mês*</span>
              </div>
              <div className="text-yellow-300 font-semibold">
                🎁 Domínio Grátis + SSL Grátis + Migração Grátis
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-6 text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 group"
            >
              Começar Agora - 74% OFF
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Ativação Imediata</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sem Taxa de Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cancele Quando Quiser</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">4.9/5</span>
                <span>em avaliações</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeadphonesIcon className="w-5 h-5 text-blue-300" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
