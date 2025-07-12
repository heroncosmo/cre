
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5517981679818', '_blank');
  };

  const footerSections = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', action: () => scrollToSection('home') },
        { name: 'Preços', action: () => scrollToSection('pricing') },
        { name: 'Números', action: () => scrollToSection('social-proof') },
        { name: 'Recursos', action: () => scrollToSection('features') },
        { name: 'Soluções', action: () => scrollToSection('solutions') },
        { name: 'Comparativo', action: () => scrollToSection('comparison') },
        { name: 'Depoimentos', action: () => scrollToSection('testimonials') },
        { name: 'Garantia', action: () => scrollToSection('guarantee') }
      ]
    },
    {
      title: 'Produtos',
      links: [
        { name: 'Criação de Site com IA', action: () => scrollToSection('pricing') },
        { name: 'Site Profissional', action: () => scrollToSection('pricing') },
        { name: 'Loja Virtual', action: () => scrollToSection('pricing') },
        { name: 'Blog', action: () => scrollToSection('pricing') },
        { name: 'Portfólio', action: () => scrollToSection('pricing') },
        { name: 'Site Institucional', action: () => scrollToSection('pricing') },
        { name: 'Landing Page', action: () => scrollToSection('pricing') },
        { name: 'Site para Empresa', action: () => scrollToSection('pricing') },
        { name: 'Site para Influencer', action: () => scrollToSection('pricing') }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'WhatsApp Suporte', action: openWhatsApp },
        { name: 'Chat ao Vivo', action: openWhatsApp },
        { name: 'Central de Ajuda', action: openWhatsApp },
        { name: 'Tutoriais', action: openWhatsApp },
        { name: 'Status dos Serviços', action: openWhatsApp },
        { name: 'Abrir Ticket', action: openWhatsApp },
        { name: 'Base de Conhecimento', action: openWhatsApp },
        { name: 'Webinars', action: openWhatsApp }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre a Place', action: () => scrollToSection('home') },
        { name: 'Performance', action: () => scrollToSection('performance') },
        { name: 'Velocidade', action: () => scrollToSection('speed') },
        { name: 'Começar Agora', action: () => scrollToSection('cta') },
        { name: 'Suporte Especializado', action: () => scrollToSection('support') },
        { name: 'Nossa Tecnologia', action: () => scrollToSection('features') },
        { name: 'Cases de Sucesso', action: () => scrollToSection('testimonials') },
        { name: 'Compromisso de Qualidade', action: () => scrollToSection('guarantee') }
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
              Criação de sites profissionais com IA.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(17) 98167-9818</span>
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

            {/* WhatsApp Support Button */}
            <div className="pt-4">
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp</span>
              </button>
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
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left w-full"
                    >
                      {link.name}
                    </button>
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
                  Quer criar seu site profissional?
                </h3>
                <p className="text-blue-100">
                  Fale conosco no WhatsApp e vamos criar seu site em minutos!
                </p>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={openWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp</span>
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

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
