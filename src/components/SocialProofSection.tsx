import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Award, Shield } from 'lucide-react';

// --- BANCO DE DADOS PARA GERAÇÃO ALEATÓRIA ---

const firstNames = [
  'Lucas', 'Maria', 'Pedro', 'Ana', 'Gabriel', 'Júlia', 'Matheus', 'Beatriz', 'Carlos', 'Amanda', 'Felipe', 'Larissa', 'Rafael', 'Mariana', 'Bruno', 'Letícia', 'Eduardo', 'Camila', 'Gustavo', 'Sofia', 'Ricardo', 'Isabela', 'Thiago', 'Manuela', 'Vinícius', 'Laura', 'Daniel', 'Alice', 'Heitor', 'Valentina', 'Davi', 'Helena', 'Arthur', 'Lorena', 'Bernardo', 'Luiza', 'Miguel', 'Yasmin', 'Davi', 'Sarah', 'Gael', 'Esther', 'Theo', 'Lívia', 'Ravi', 'Antonella', 'Noah', 'Elisa', 'Ayla', 'Enzo', 'Caio', 'Clara', 'Breno', 'Diana', 'Erick', 'Fernanda', 'Giovanni', 'Heloísa', 'Igor', 'Joana', 'Kaique', 'Lívia', 'Murilo', 'Natália', 'Otávio', 'Pietra', 'Raul', 'Sabrina', 'Thales', 'Vitória', 'William', 'Yara', 'Alex', 'Bárbara', 'César', 'Débora', 'Elton', 'Fátima', 'Gerson', 'Íris', 'Jean', 'Karen', 'Leandro', 'Mônica', 'Nícolas', 'Olívia', 'Paulo', 'Raquel', 'Samuel', 'Tatiane', 'Ulisses', 'Verônica', 'Wagner', 'Ximena', 'Yuri', 'Zilda'
];
const lastInitials = ['S.', 'F.', 'A.', 'C.', 'M.', 'P.', 'R.', 'L.', 'G.', 'T.', 'B.', 'O.', 'D.', 'V.', 'N.', 'J.', 'K.', 'E.', 'H.', 'I.'];

const locations = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Curitiba', 'Recife', 'Porto Alegre', 'Fortaleza', 'Manaus', 'Goiânia', 'Belém', 'Florianópolis', 'Vitória', 'Natal', 'Maceió', 'Campo Grande', 'Teresina', 'João Pessoa', 'Aracaju', 'Cuiabá', 'Porto Velho', 'Macapá', 'Boa Vista', 'Rio Branco', 'Palmas', 'São Luís'
];

const actions = [
  'lançou um novo site de portfólio',
  'criou sua loja virtual com o Plano Plus',
  'iniciou um blog sobre culinária',
  'publicou uma landing page para seu evento',
  'fez upgrade para o Plano Turbo',
  'personalizou o template do seu site',
  'contratou o Plano Start para seu projeto',
  'migrou seu site para a Place com sucesso',
  'adicionou uma galeria de fotos profissional',
  'publicou seu primeiro artigo no blog',
  'criou um site para sua pequena empresa',
  'ativou o certificado de segurança SSL',
  'assinou o Plano Plus para mais performance',
  'lançou sua loja de dropshipping',
  'começou a construir sua marca online',
  'escolheu um novo visual para seu site',
  'contratou o Plano Turbo para máxima velocidade',
  'criou uma página de captura de leads'
];

// Função para gerar uma lista de atividades únicas e aleatórias
const generateRandomSignups = (count) => {
  const generatedSignups = new Set();
  const usedNames = new Set();

  while (generatedSignups.size < count) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastInitials[Math.floor(Math.random() * lastInitials.length)];
    const fullName = `${firstName} ${lastName}`;

    if (!usedNames.has(fullName)) {
      const location = locations[Math.floor(Math.random() * locations.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      generatedSignups.add({ name: fullName, location, action });
      usedNames.add(fullName);
    }
  }
  return Array.from(generatedSignups);
};

export const SocialProofSection = () => {
  const liveStats = [
    { number: '2.847', label: 'Sites criados hoje', icon: TrendingUp, color: 'text-green-600' },
    { number: '52.847', label: 'Clientes ativos', icon: Award, color: 'text-blue-600' },
    { number: '99.9%', label: 'Uptime confirmado', icon: Shield, color: 'text-purple-600' },
    { number: '4.9★', label: 'Avaliação média', icon: Star, color: 'text-yellow-600' }
  ];

  const [recentSignups, setRecentSignups] = useState([]);

  useEffect(() => {
    setRecentSignups(generateRandomSignups(5)); // Gera 5 atividades aleatórias
  }, []); // Roda apenas uma vez quando o componente é montado

  return (
    <section id="social-proof" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background com pessoas celebrando */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=600&fit=crop"
          alt="Pessoas celebrando sucesso"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
              <h3 className="text-xl font-bold text-gray-900">Atividade do dia</h3>
            </div>
            
            <div className="space-y-4">
              {recentSignups.map((signup, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {signup.name.split(' ').map(part => part[0]).join('')}
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">
                        <span className="font-bold">{signup.name}</span> de {signup.location}
                      </div>
                      <div className="text-gray-600 text-sm">{signup.action}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">+847 novos clientes nas últimas 24h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges with Happy Customers */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Certificações e reconhecimentos</p>
          
          {/* Clientes felizes com imagens reais */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
                alt="Designer de UX"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeito"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeita"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=60&h=60&fit=crop&crop=face"
                alt="Cliente satisfeito"
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
            </div>
            <div className="text-left ml-4">
              <p className="text-lg font-bold text-gray-800">+52.847 clientes satisfeitos</p>
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 em satisfação</span>
              </div>
            </div>
          </div>
          
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
