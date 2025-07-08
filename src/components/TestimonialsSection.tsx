
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empreendedora Digital',
      company: 'Loja da Maria',
      content: 'Migrei minha loja para a Place e os resultados foram incríveis. O site ficou 3x mais rápido e as vendas aumentaram 40%. Suporte sempre disponível!',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'João Santos',
      role: 'Desenvolvedor',
      company: 'TechSolutions',
      content: 'Como desenvolvedor, preciso de performance e confiabilidade. A Place oferece exatamente isso. Uptime perfeito e velocidade excepcional.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Ana Costa',
      role: 'Blogueira',
      company: 'Blog da Ana',
      content: 'Comecei do zero e a Place me ajudou em cada passo. O construtor de sites é fantástico e consegui criar um blog profissional em minutos.',
      rating: 5,
      avatar: '/api/placeholder/60/60' 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja o que o mercado fala da Place
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Milhares de clientes confiam na Place para hospedar seus projetos digitais
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-200"
            >
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Escale seus resultados com a Place
            </h3>
            <p className="text-gray-600">
              Junte-se a milhares de empresários que escolheram a Place para crescer online
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600 text-sm">Avaliação média</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">+50K</div>
              <div className="text-gray-600 text-sm">Clientes satisfeitos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">15 anos</div>
              <div className="text-gray-600 text-sm">De experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600 text-sm">Suporte dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
