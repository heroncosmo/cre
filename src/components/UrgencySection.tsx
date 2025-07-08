
import React from 'react';
import { Button } from './ui/button';
import { Clock, AlertTriangle, TrendingUp, Users } from 'lucide-react';

export const UrgencySection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-red-200">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              ⚠️ ÚLTIMAS HORAS DA PROMOÇÃO!
            </h2>
            <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
          </div>
          
          <p className="text-lg text-red-600 font-medium max-w-2xl mx-auto">
            Mais de <span className="font-bold">1.200 pessoas</span> já aproveitaram esta oferta hoje. 
            Restam apenas <span className="font-bold text-red-700">47 vagas</span> com desconto de 74%!
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-red-200">
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-red-500" />
                <div>
                  <div className="text-2xl font-bold text-red-700">23:45:12</div>
                  <div className="text-sm text-red-600">Tempo restante</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-orange-200">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold text-orange-700">74% OFF</div>
                  <div className="text-sm text-orange-600">Desconto máximo</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-yellow-200">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold text-yellow-700">47</div>
                  <div className="text-sm text-yellow-600">Vagas restantes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 animate-pulse"
            >
              🔥 GARANTIR MINHA VAGA AGORA - 74% OFF
            </Button>
            
            <p className="text-sm text-red-600">
              ⚠️ Esta oferta não será repetida. Aproveite enquanto há tempo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
