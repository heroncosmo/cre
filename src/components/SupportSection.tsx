
import React from 'react';
import { MessageCircle, Phone, Mail, Clock, Users, Award } from 'lucide-react';
import { Button } from './ui/button';

export const SupportSection = () => {
  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Chat ao Vivo',
      description: 'Converse com nossos especialistas em tempo real',
      availability: 'Disponível 24/7',
      action: 'Iniciar Chat'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Telefone',
      description: 'Fale diretamente com nossa equipe de suporte',
      availability: '0800 123 4567',
      action: 'Ligar Agora'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email',
      description: 'Envie sua dúvida e receba resposta rapidamente',
      availability: 'Resposta em até 2h',
      action: 'Enviar Email'
    }
  ];

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Suporte 24/7',
      description: 'Equipe disponível todos os dias, a qualquer hora'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Especialistas Certificados',
      description: 'Profissionais experientes em hospedagem web'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Suporte Premiado',
      description: 'Reconhecido pela excelência no atendimento'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Suporte humanizado e sempre presente
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar você a ter sucesso online. 
            Suporte técnico especializado 24 horas por dia, 7 dias por semana.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 text-center"
            >
              <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-6">
                {channel.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {channel.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {channel.description}
              </p>
              <div className="text-sm text-blue-600 font-semibold mb-6">
                {channel.availability}
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {channel.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Support Features */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de ajuda? Estamos aqui para você!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para resolver qualquer dúvida 
              e ajudar você a alcançar seus objetivos online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Ver Central de Ajuda
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
