
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Code, Smartphone, Palette } from 'lucide-react';

export const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'WordPress',
      subtitle: 'Crie sites profissionais',
      description: 'Mais de 40 milhões de sites usam WordPress. Instale em 1 clique e comece hoje mesmo.',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: 'Construtor de Sites',
      subtitle: 'Arrastar e soltar',
      description: 'Crie seu site sem códigos com nosso construtor intuitivo e templates profissionais.',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: 'Loja Virtual',
      subtitle: 'Venda online agora',
      description: 'Monte sua loja virtual completa com carrinho, pagamento e gestão de produtos.',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            HostGator tem tudo para você começar a crescer
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ferramentas profissionais e soluções completas para levar seu negócio para o próximo nível
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-2xl ${solution.bgColor} mb-6`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {solution.title}
              </h3>
              <p className="text-blue-600 font-semibold mb-4">
                {solution.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {solution.description}
              </p>
              
              <Button 
                variant="outline" 
                className="group hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3M+</div>
              <div className="text-gray-600">Sites Hospedados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte Especializado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
