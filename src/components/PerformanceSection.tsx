
import React from 'react';
import { Zap, Globe, Shield, Database, Gauge, Server } from 'lucide-react';

export const PerformanceSection = () => {
  const performanceFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Velocidade extrema mesmo diante dos maiores picos de tráfego',
      description: 'Infraestrutura otimizada com servidores SSD e tecnologia de cache avançada para garantir máxima performance.',
      stats: '3x mais rápido'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'CDN Global Gratuito',
      description: 'Rede de distribuição de conteúdo com pontos de presença em todo o mundo para acelerar seu site.',
      stats: 'CDN em 200+ países'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Armazenamento SSD Premium',
      description: 'Discos SSD de alta performance que garantem velocidade de leitura e escrita até 10x superiores.',
      stats: '10x mais rápido'
    }
  ];

  const techSpecs = [
    { label: 'Uptime Garantido', value: '99.9%' },
    { label: 'Tempo de Resposta', value: '<200ms' },
    { label: 'Largura de Banda', value: 'Ilimitada' },
    { label: 'Transferência Mensal', value: 'Ilimitada' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Velocidade e estabilidade mesmo diante dos maiores picos de tráfego
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nossa infraestrutura foi projetada para oferecer máxima performance e confiabilidade, 
            garantindo que seu site esteja sempre no ar e funcionando perfeitamente.
          </p>
        </div>

        {/* Performance Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-200"
            >
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm mb-6">
                {feature.icon}
              </div>
              
              <div className="text-sm font-semibold text-blue-600 mb-3">
                {feature.stats}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Specs */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Especificações Técnicas Premium
            </h3>
            <p className="text-blue-100">
              Infraestrutura de classe mundial para seu projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {techSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  {spec.value}
                </div>
                <div className="text-blue-100 text-sm">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Funcionalidades que fazem toda a diferença no seu site
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Proteção DDoS Avançada</h4>
                  <p className="text-gray-600 text-sm">Proteção automática contra ataques e tráfego malicioso</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Servidores Redundantes</h4>
                  <p className="text-gray-600 text-sm">Infraestrutura duplicada para máxima disponibilidade</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Gauge className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Monitoramento 24/7</h4>
                  <p className="text-gray-600 text-sm">Monitoramento contínuo para detectar e resolver problemas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">CPU Performance</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-6 bg-green-400 rounded"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-6 rounded ${i < 3 ? 'bg-blue-400' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Network Speed</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-6 bg-yellow-400 rounded"></div>
                    ))}
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
