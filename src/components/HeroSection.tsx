
import React from 'react';
import { Button } from './ui/button';
import { Check, Shield, MessageCircle, Star, Users, Award, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-8 md:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Trust Bar - Primeira coisa que o usuário vê */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border">
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

        {/* Discount Badge - Urgência imediata */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg animate-pulse">
            🔥 OFERTA RELÂMPAGO: ATÉ 74% OFF - APENAS HOJE!
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Hierarquia visual clara */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Main Headline - Problema + Solução */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Crie <span className="text-blue-600 relative">
                  seu site
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-50 -z-10"></div>
                </span><br />
                WordPress com<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IA em minutos</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                A plataforma mais completa do Brasil para criar sites profissionais. 
                <span className="font-semibold text-blue-600"> Sem conhecimento técnico, sem complicação.</span>
              </p>
            </div>

            {/* Pricing Centralizado - Foco na oferta */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-yellow-300 mx-auto lg:mx-0 max-w-md">
              <div className="text-center space-y-3">
                <div className="text-gray-600 text-sm uppercase tracking-wide font-semibold">Comece hoje mesmo por apenas</div>
                <div className="space-y-1">
                  <div className="text-gray-400 line-through text-xl font-medium">De R$ 29,88/mês por</div>
                  <div className="text-5xl font-bold text-gray-900 flex items-center justify-center">
                    R$ 7,79<span className="text-xl text-gray-600 ml-2">/mês*</span>
                  </div>
                </div>
                <div className="text-blue-600 font-semibold text-lg">
                  🎁 2 Domínios Grátis + SSL Vitalício + Migração Gratuita
                </div>
                <div className="text-xs text-gray-500">
                  *Preço promocional para novos clientes no plano de 36 meses
                </div>
              </div>
            </div>

            {/* CTA Principal - Destaque máximo */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-bold px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:w-auto transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  🚀 CRIAR MEU SITE AGORA - 74% OFF
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              {/* Garantias imediatas */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-gray-600">
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

              {/* Timer de urgência */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 max-w-sm mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-red-600 font-bold text-sm">⏰ OFERTA EXPIRA EM:</div>
                  <div className="text-red-800 font-bold text-2xl">23:45:12</div>
                  <div className="text-red-600 text-xs">Não perca esta oportunidade única!</div>
                </div>
              </div>
            </div>

            {/* Benefits List - Reforço de valor */}
            <div className="grid md:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
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
          </div>

          {/* Right Content - Visual demonstrativo */}
          <div className="relative order-first lg:order-last">
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

              {/* AI Assistant Floating */}
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

        {/* Social Proof em tempo real */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900">+2.847 sites criados esta semana</div>
                <div className="text-sm text-gray-600">Junte-se aos empreendedores que escolheram a Place</div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">Sem setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">Máxima segurança</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="font-medium">Suporte premiado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
