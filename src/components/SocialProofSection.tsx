
import React from 'react';
import { Star, TrendingUp, Award, Shield } from 'lucide-react';

export const SocialProofSection = () => {
  const liveStats = [
    { number: '847', label: 'Sites criados hoje', icon: TrendingUp, color: 'text-green-600' },
    { number: '52.847', label: 'Clientes ativos', icon: Award, color: 'text-blue-600' },
    { number: '99.9%', label: 'Uptime confirmado', icon: Shield, color: 'text-purple-600' },
    { number: '4.9★', label: 'Avaliação média', icon: Star, color: 'text-yellow-600' }
  ];

  const recentSignups = [
    { name: 'Maria S.', location: 'São Paulo', action: 'criou seu site', time: '2 min' },
    { name: 'João P.', location: 'Rio de Janeiro', action: 'contratou Plano Plus', time: '4 min' },
    { name: 'Ana C.', location: 'Belo Horizonte', action: 'migrou seu site', time: '6 min' },
    { name: 'Carlos R.', location: 'Salvador', action: 'criou sua loja virtual', time: '8 min' },
    { name: 'Fernanda L.', location: 'Brasília', action: 'contratou Plano Turbo', time: '12 min' }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Live Stats */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Números que falam por si só
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {liveStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-gray-900">Atividade em tempo real</h3>
            </div>
            
            <div className="space-y-4">
              {recentSignups.map((signup, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {signup.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">
                        <span className="font-bold">{signup.name}</span> de {signup.location}
                      </div>
                      <div className="text-gray-600 text-sm">{signup.action}</div>
                    </div>
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    há {signup.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">+127 novos clientes nas últimas 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Certificações e reconhecimentos</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="font-bold text-gray-700">ISO 27001</div>
              <div className="text-xs text-gray-500">Segurança</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="font-bold text-gray-700">99.9% SLA</div>
              <div className="text-xs text-gray-500">Disponibilidade</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="font-bold text-gray-700">24/7 Support</div>
              <div className="text-xs text-gray-500">Suporte</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="font-bold text-gray-700">LGPD</div>
              <div className="text-xs text-gray-500">Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
