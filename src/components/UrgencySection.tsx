
import React from 'react';
import { Button } from './ui/button';
import { Clock, AlertTriangle, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const UrgencySection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50 border-y-4 border-red-200">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-2">
            <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-red-700">
              ⚠️ ÚLTIMAS HORAS DA PROMOÇÃO!
            </h2>
            <AlertTriangle className="w-10 h-10 text-red-500 animate-pulse" />
          </div>
          
          <p className="text-xl text-red-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Mais de <span className="font-bold text-red-800">1.200 pessoas</span> já aproveitaram esta oferta hoje. 
            Restam apenas <span className="font-bold text-red-800 text-2xl">47 vagas</span> com desconto de 74%!
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-xl border-4 border-red-200 transform hover:scale-105 transition-all">
              <div className="flex flex-col items-center space-y-3">
                <Clock className="w-12 h-12 text-red-500" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-700">23:45:12</div>
                  <div className="text-sm text-red-600 font-medium">Tempo restante</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-xl border-4 border-orange-200 transform hover:scale-105 transition-all">
              <div className="flex flex-col items-center space-y-3">
                <TrendingUp className="w-12 h-12 text-orange-500" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-700">74% OFF</div>
                  <div className="text-sm text-orange-600 font-medium">Desconto máximo</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-xl border-4 border-yellow-200 transform hover:scale-105 transition-all">
              <div className="flex flex-col items-center space-y-3">
                <Users className="w-12 h-12 text-yellow-500" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-700">47</div>
                  <div className="text-sm text-yellow-600 font-medium">Vagas restantes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 animate-pulse group"
            >
              🔥 GARANTIR MINHA VAGA AGORA - 74% OFF
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-700 font-semibold">
                ⚠️ Esta oferta não será repetida.<br />
                <span className="text-red-800">Aproveite enquanto há tempo!</span>
              </p>
            </div>
          </div>

          {/* Contador de pessoas visualizando */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mx-auto border-2 border-blue-200">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">847 pessoas</span> visualizando esta página agora
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
