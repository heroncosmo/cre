
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Code, Smartphone, Palette, Globe, Briefcase, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';

export const SolutionsSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Site Profissional',
      subtitle: 'Ideal para Empresas',
      description: 'Site institucional, página de serviços, blog corporativo ou landing page de alto impacto. Perfeito para empresas que buscam presença online profissional.',
      features: ['Landing Pages', 'Sites Institucionais', 'Blogs Corporativos', 'Páginas de Serviços'],
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Briefcase className="w-10 h-10 text-purple-500" />,
      title: 'Portfólio & Blog',
      subtitle: 'Para Criativos e Influencers',
      description: 'Portfólio digital, blog pessoal, galeria de projetos ou site para influenciadores. Ideal para mostrar seu trabalho e compartilhar conteúdo.',
      features: ['Portfólio Digital', 'Blog Pessoal', 'Galeria de Projetos', 'Site para Influencer'],
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-orange-500" />,
      title: 'E-commerce',
      subtitle: 'Venda Online',
      description: 'Loja virtual completa, marketplace, catálogo digital ou plataforma de vendas. Perfeito para quem quer vender produtos ou serviços online.',
      features: ['Loja Virtual', 'Catálogo Digital', 'Plataforma de Vendas', 'Gestão de Produtos'],
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={cn("text-center mb-16 opacity-100 translate-y-0")}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            Place tem tudo para você Começar a Crescer
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ferramentas profissionais e soluções completas para levar seu negócio para o próximo nível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Technology Image with Frosted Glass Effect */}
          <div className={cn("relative lg:order-last opacity-100 scale-100")}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop"
                alt="Equipe profissional apresentando um projeto de sucesso"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Soluções para Todos os Níveis
                </h3>
                <p className="text-gray-800 font-medium">
                  Do blog pessoal à loja virtual, temos a ferramenta certa para você decolar.
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={cn("bg-white rounded-2xl p-6 shadow-sm border border-gray-100 opacity-100 translate-x-0")}
              >
                <div className="flex items-start space-x-5">
                  <div className={`flex-shrink-0 inline-flex p-3 rounded-xl ${solution.bgColor}`}>
                    {solution.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {solution.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={scrollToPricing}
                      variant="outline"
                      className="w-full justify-between hover:bg-blue-50"
                    >
                      Começar Agora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
