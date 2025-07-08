
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Produtos',
      links: [
        'Hospedagem de Sites',
        'Hospedagem WordPress',
        'Hospedagem VPS',
        'Servidores Dedicados',
        'Registro de Domínios',
        'Certificados SSL',
        'Email Profissional',
        'Construtor de Sites'
      ]
    },
    {
      title: 'Suporte',
      links: [
        'Central de Ajuda',
        'Tutoriais',
        'Status dos Serviços',
        'Contato',
        'Chat ao Vivo',
        'Abrir Ticket',
        'Base de Conhecimento',
        'Webinars'
      ]
    },
    {
      title: 'Empresa',
      links: [
        'Sobre a Place',
        'Carreiras',
        'Imprensa',
        'Parceiros',
        'Afiliados',
        'Responsabilidade Social',
        'Programa de Indicação',
        'Certificações'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Termos de Uso',
        'Política de Privacidade',
        'SLA',
        'Política de Reembolso',
        'LGPD',
        'Código de Conduta',
        'Relatório de Transparência',
        'Política de Cookies'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-2xl font-bold text-blue-400">
              Place
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando ideias em negócios de sucesso online há mais de 15 anos. 
              Hospedagem confiável, suporte especializado.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contato@place.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Fique por dentro das novidades
                </h3>
                <p className="text-blue-100">
                  Receba dicas exclusivas, promoções e updates sobre hospedagem web
                </p>
              </div>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Place. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>Aceito em todo o Brasil</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded"></div>
                <div className="w-8 h-5 bg-red-600 rounded"></div>
                <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                <div className="w-8 h-5 bg-green-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
