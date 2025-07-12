
import React from 'react';
import { MessageCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

export const SupportSection = () => {
  // Remover uso do hook useInView
  // const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const supportChannels = [
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      title: 'Chat ao Vivo',
      description: 'Suporte instantâneo para suas dúvidas',
      availability: 'Disponível 24/7',
      action: 'Iniciar Chat',
      actionHref: '#',
      teamMember: {
        name: 'Lucas Silva',
        role: 'Desenvolvedor Full Stack',
        photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&h=120&fit=crop&crop=face'
      }
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      title: 'WhatsApp',
      description: 'Atendimento rápido e personalizado',
      availability: 'Seg-Sex: 8h às 20h',
      action: 'Abrir WhatsApp',
      actionHref: 'https://wa.me/5517981679818',
      teamMember: {
        name: 'Ana Costa',
        role: 'Desenvolvedora Backend',
        photo: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=120&h=120&fit=crop&crop=face'
      }
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: 'Suporte por Telefone',
      description: 'Atendimento personalizado por voz',
      availability: '(17) 98167-9818',
      action: 'Ligar Agora',
      actionHref: 'tel:+5517981679818',
      teamMember: {
        name: 'Pedro Santos',
        role: 'Desenvolvedor Frontend',
        photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=120&h=120&fit=crop&crop=face'
      }
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      title: 'Email Prioritário',
      description: 'Respostas em até 2 horas',
      availability: 'Resposta rápida garantida',
      action: 'Enviar Email',
      actionHref: 'mailto:suporte@place.com.br',
      teamMember: {
        name: 'Pedro Santos',
        role: 'Desenvolvedor Frontend',
        photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=120&h=120&fit=crop&crop=face'
      }
    }
  ];

  return (
    <section id="support" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-16 opacity-100 translate-y-0")}> 
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex -space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=60&h=60&fit=crop&crop=face"
                alt="Desenvolvedor Senior"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=120&h=120&fit=crop&crop=face"
                alt="UX Designer"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=60&h=60&fit=crop&crop=face"
                alt="Tech Lead"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">Nossa equipe especializada</p>
              <p className="text-xs text-gray-600">+15 anos de experiência</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tighter">
            Suporte Humanizado e Sempre Presente
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar você a ter sucesso online, 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={cn("grid sm:grid-cols-2 gap-8 opacity-100 translate-x-0")}> 
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="inline-flex p-3 bg-gray-100 rounded-xl mb-4">
                  {channel.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {channel.description}
                </p>
                <div className="text-xs text-blue-600 font-semibold mb-4">
                  {channel.availability}
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = channel.actionHref}
                >
                  {channel.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Technology Image with Frosted Glass Effect */}
          <div className={cn("relative opacity-100 scale-100")}> 
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&h=1000&fit=crop"
                alt="Especialista de suporte pronta para ajudar com um sorriso"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Especialistas de Verdade
                </h3>
                <p className="text-gray-800 font-medium">
                  Converse com profissionais que entendem do assunto e estão prontos para resolver seus problemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
