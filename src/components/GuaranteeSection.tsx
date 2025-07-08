
import React from 'react';
import { Button } from './ui/button';
import { Shield, RefreshCw, Heart, Award, CheckCircle } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Guarantee */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-200 mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-6">
                <Shield className="w-16 h-16 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛡️ Garantia de 30 Dias
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Não gostou? <span className="font-bold text-green-600">Devolvemos 100% do seu dinheiro!</span><br />
              Sem perguntas, sem complicações, sem letras miúdas.
            </p>
            
            <div className="bg-green-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Como funciona nossa garantia:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-green-800">1</span>
                  </div>
                  <div className="text-sm font-medium text-green-700">
                    Contrate qualquer plano
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-green-800">2</span>
                  </div>
                  <div className="text-sm font-medium text-green-700">
                    Teste por até 30 dias
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-green-800">3</span>
                  </div>
                  <div className="text-sm font-medium text-green-700">
                    Reembolso total garantido
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              ✅ COMEÇAR SEM RISCOS AGORA
            </Button>
          </div>

          {/* Additional Guarantees */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Uptime 99.9%</h4>
              <p className="text-gray-600 text-sm">
                Garantimos que seu site ficará no ar 99.9% do tempo
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Suporte 24/7</h4>
              <p className="text-gray-600 text-sm">
                Nossa equipe está sempre disponível para te ajudar
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Migração Grátis</h4>
              <p className="text-gray-600 text-sm">
                Transferimos seu site atual sem custo adicional
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Sem Permanência</h4>
              <p className="text-gray-600 text-sm">
                Cancele quando quiser, sem multas ou taxas
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Ricardo Oliveira</div>
                <div className="text-gray-600 text-sm">CEO da TechStart</div>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "Testei a Place por 15 dias e fiquei impressionado com a qualidade. 
              A garantia de 30 dias me deu total segurança para fazer a migração. 
              Foi a melhor decisão que tomei para minha empresa!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
