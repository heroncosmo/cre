
import React from 'react';
import { Button } from './ui/button';
import { Check, Shield, MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Discount Badge */}
            <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ATÉ 74% OFF NA HOSPEDAGEM DE SITES
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Crie <span className="text-blue-600">seu site</span><br />
                WordPress com<br />
                <span className="text-gray-800">IA em minutos</span>
              </h1>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">CDN Grátis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Migração de site grátis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Suporte 24h por dia</span>
              </div>
            </div>

            {/* Pricing - Centralized */}
            <div className="text-center md:text-left space-y-2">
              <div className="text-gray-600">a partir de</div>
              <div className="text-4xl font-bold text-gray-900">
                R$ 7,79<span className="text-xl text-gray-600">/mês*</span>
              </div>
              <div className="text-gray-600 font-medium">
                Planos com até 2 domínios grátis
              </div>
            </div>

            {/* CTA Button - Centralized */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full md:w-auto"
              >
                Ver planos
              </Button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Até 30 dias para reembolso</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              {/* Mockup Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded h-6 mx-4"></div>
              </div>
              
              {/* Mockup Content */}
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>

              {/* AI Assistant Floating */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold text-sm">Criar com IA</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-blue-300 rounded"></div>
                      <span>Prompt personalizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-blue-300 rounded"></div>
                      <span>Melhore a escrita</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-blue-300 rounded"></div>
                      <span>Simplificar idioma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
