
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
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'João Santos',
      role: 'Desenvolvedor',
      company: 'TechSolutions',
      content: 'Como desenvolvedor, preciso de performance e confiabilidade. A Place oferece exatamente isso. Uptime perfeito e velocidade excepcional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&fit=crop&crop=face'
    },
    {
      name: 'Ana Costa',
      role: 'Blogueira',
      company: 'Blog da Ana',
      content: 'Comecei do zero e a Place me ajudou em cada passo. O construtor de sites é fantástico e consegui criar um blog profissional em minutos.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=120&h=120&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white relative overflow-hidden">
      {/* Background com pessoas trabalhando */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
          alt="Pessoas trabalhando felizes"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header com foto de pessoas satisfeitas */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex -space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeita"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeito"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeita"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">+52.847 clientes satisfeitos</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
          </div>
          
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

              {/* Author with real photo */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - cliente satisfeito`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Ccircle cx='28' cy='28' r='28' fill='%2334D399'/%3E%3Ctext x='28' y='34' text-anchor='middle' font-size='20' fill='white' font-weight='bold'%3E${testimonial.name.charAt(0)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
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

        {/* Trust Indicators with Team Photo */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden">
          {/* Foto da equipe no fundo */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop"
              alt="Equipe de suporte feliz"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
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
              <div className="text-2xl font-bold text-green-600">+52.8K</div>
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
      </div>
    </section>
  );
};
