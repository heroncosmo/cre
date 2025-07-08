
import React from 'react';
import { Check, X, Crown } from 'lucide-react';

export const ComparisonSection = () => {
  const competitors = [
    {
      name: 'Place',
      logo: '🏆',
      isOurs: true,
      features: {
        price: 'R$ 7,79/mês',
        domains: '2 grátis',
        ssl: 'Vitalício',
        support: '24/7 Especializado',
        backup: 'Diário automático',
        ai: 'IA incluída',
        migration: 'Gratuita',
        uptime: '99.9% SLA'
      }
    },
    {
      name: 'Concorrente A',
      logo: '🏢',
      isOurs: false,
      features: {
        price: 'R$ 19,90/mês',
        domains: '1 grátis',
        ssl: '1 ano',
        support: 'Horário comercial',
        backup: 'Semanal',
        ai: 'Não incluído',
        migration: 'Paga',
        uptime: '99.5%'
      }
    },
    {
      name: 'Concorrente B',
      logo: '🏬',
      isOurs: false,
      features: {
        price: 'R$ 15,99/mês',
        domains: 'Nenhum',
        ssl: 'Pago',
        support: 'Chat básico',
        backup: 'Manual',
        ai: 'Add-on pago',
        migration: 'Não oferece',
        uptime: '99.0%'
      }
    }
  ];

  const features = [
    { key: 'price', label: 'Preço mensal' },
    { key: 'domains', label: 'Domínios grátis' },
    { key: 'ssl', label: 'Certificado SSL' },
    { key: 'support', label: 'Suporte técnico' },
    { key: 'backup', label: 'Backup' },
    { key: 'ai', label: 'Criador com IA' },
    { key: 'migration', label: 'Migração' },
    { key: 'uptime', label: 'Uptime garantido' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Place?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Compare nossos recursos com os principais concorrentes do mercado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-6 font-bold text-gray-900">Recursos</th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className={`text-center p-6 ${competitor.isOurs ? 'bg-blue-50' : ''}`}>
                      <div className="space-y-2">
                        <div className="text-2xl">{competitor.logo}</div>
                        <div className={`font-bold ${competitor.isOurs ? 'text-blue-600' : 'text-gray-700'}`}>
                          {competitor.name}
                          {competitor.isOurs && <Crown className="w-5 h-5 text-yellow-500 inline ml-2" />}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-semibold text-gray-900">{feature.label}</td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className={`text-center p-6 ${competitor.isOurs ? 'bg-blue-50' : ''}`}>
                        <div className={`font-medium ${
                          competitor.isOurs ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {competitor.features[feature.key]}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Winner Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-2xl shadow-lg">
              <Crown className="w-6 h-6 mr-3" />
              <span className="font-bold text-lg">A Place é claramente a melhor escolha!</span>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-green-700 font-medium">Mais barato que concorrentes</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3x</div>
              <div className="text-blue-700 font-medium">Mais recursos inclusos</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-purple-700 font-medium">Suporte sempre disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
