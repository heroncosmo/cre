
import React from 'react';
import { Button } from './ui/button';
import { Check, Shield, MessageCircle, Star, Users, Award } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Trust Bar */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center space-x-2 text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-700">4.9/5 estrelas</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="font-semibold text-gray-700">+50.000 clientes</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="w-4 h-4 text-green-500" />
              <span className="font-semibold text-gray-700">15 anos no mercado</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Discount Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
              🔥 OFERTA RELÂMPAGO: ATÉ 74% OFF - APENAS HOJE!
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Crie <span className="text-blue-600 relative">
                  seu site
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-50 -z-10"></div>
                </span><br />
                WordPress com<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IA em minutos</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                A plataforma mais completa do Brasil para criar sites profissionais. 
                <span className="font-semibold text-blue-600"> Sem conhecimento técnico, sem complicação.</span>
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">CDN Grátis Mundial</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">SSL Gratuito Vitalício</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Migração 100% Grátis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Suporte 24h Especializado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Backup Diário Automático</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">99.9% Uptime Garantido</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">+2.847 sites criados esta semana</div>
                  <div className="text-xs text-gray-600">Junte-se aos empreendedores que escolheram a Place</div>
                </div>
              </div>
            </div>

            {/* Pricing - Centralized */}
            <div className="text-center md:text-left space-y-3 bg-white rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
              <div className="text-gray-600 text-sm uppercase tracking-wide">Comece hoje mesmo por apenas</div>
              <div className="space-y-1">
                <div className="text-gray-400 line-through text-lg">De R$ 29,88/mês por</div>
                <div className="text-5xl font-bold text-gray-900">
                  R$ 7,79<span className="text-xl text-gray-600">/mês*</span>
                </div>
              </div>
              <div className="text-blue-600 font-semibold text-lg">
                🎁 2 Domínios Grátis + SSL Vitalício + Migração Gratuita
              </div>
              <div className="text-xs text-gray-500">
                *Preço promocional para novos clientes no plano de 36 meses
              </div>
            </div>

            {/* CTA Button - Centralized */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">🚀 CRIAR MEU SITE AGORA - 74% OFF</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>30 dias de garantia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Ativação imediata</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Sem permanência</span>
                </div>
              </div>

              {/* Urgency Timer */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 w-full md:w-auto">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-sm">⏰ OFERTA EXPIRA EM:</div>
                  <div className="text-red-800 font-bold text-lg">23:45:12</div>
                  <div className="text-red-600 text-xs">Não perca esta oportunidade única!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100 relative overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded h-6 mx-4 flex items-center px-3">
                  <span className="text-xs text-gray-500">meusite.place.com.br</span>
                </div>
              </div>
              
              {/* Mockup Content */}
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-2 left-2 bg-white/90 rounded px-2 py-1 text-xs font-semibold">
                    Criado com IA
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-400 rounded"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-purple-400 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>

              {/* AI Assistant Floating - Enhanced */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold text-sm">IA Place Assistant</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-blue-300 rounded animate-pulse"></div>
                      <span>Criando conteúdo...</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-green-300 rounded"></div>
                      <span>Design otimizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-1 bg-yellow-300 rounded"></div>
                      <span>SEO configurado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Badge */}
              <div className="absolute -left-3 top-4">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform -rotate-12">
                  99.9% Uptime
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3x</div>
                <div className="text-xs text-gray-600">Mais rápido</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">Suporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Elements */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Sem setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Máxima segurança</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Suporte premiado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
