
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Clock, Zap, TrendingUp } from 'lucide-react';

export const SpeedSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              PERFORMANCE MÁXIMA
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Vem para a Place e tenha{' '}
              <span className="text-green-600">tudo para seu sucesso!</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Seja seu primeiro site ou seu projeto mais ambicioso, oferecemos toda a infraestrutura 
              e suporte necessários para você alcançar seus objetivos online com segurança e performance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Migração gratuita e sem complicações</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Instalação WordPress em 1 clique</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Suporte especializado 24/7 em português</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">30 dias de garantia ou seu dinheiro de volta</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Performance Stats */}
          <div className="space-y-6">
            {/* Speed Test Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-green-500 mr-3" />
                Teste de Velocidade
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tempo de Carregamento</span>
                  <span className="font-bold text-green-600">0.8s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Performance Score</span>
                  <span className="font-bold text-green-600">98/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-bold text-green-600">99.9%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-500 mr-3" />
                Comparativo de Performance
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Place</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-600">0.8s</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Concorrente A</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">2.1s</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Concorrente B</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">3.4s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center">
              <div className="text-2xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Garantido</div>
              <div className="text-sm text-blue-200 mt-2">
                Com SLA e monitoramento 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
