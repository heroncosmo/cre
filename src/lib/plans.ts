interface PlanOption {
  period: string;
  price: string;
  originalPrice: string;
  discount: string;
  totalPrice: string;
  savings: string;
  renewal: string;
  domainInfo: string;
}

interface Plan {
  key: string;
  name: string;
  description: string;
  features: string[];
  options: PlanOption[];
}

export const plans: Plan[] = [
  {
    key: 'plano-start',
    name: 'Plano Start',
    description: 'O primeiro passo para iniciar sua jornada digital.',
    features: [
      'Hospedagem para 1 domínio',
      '50 GB de Armazenamento SSD',
      '3 Contas de E-mail Profissional',
      'Domínio Grátis por 1 ano',
      'Certificado SSL Grátis',
      'Backup Diário Automático',
      'Suporte 24/7'
    ],
    options: [
      {
        period: '3anos',
        price: '7,79',
        originalPrice: '26,89',
        discount: '71% OFF',
        totalPrice: '278,48',
        savings: '797,55',
        renewal: 'Renove com 36% de desconto por R$ 17,19/mês',
        domainInfo: '1 ano de domínio .online grátis'
      },
      {
        period: '2anos',
        price: '9,99',
        originalPrice: '26,89',
        discount: '63% OFF',
        totalPrice: '237,49',
        savings: '515,86',
        renewal: 'Renove com 18% de desconto por R$ 21,99/mês',
        domainInfo: '1 ano de domínio .online grátis'
      },
      {
        period: '1ano',
        price: '9,99',
        originalPrice: '26,89',
        discount: '63% OFF',
        totalPrice: '118,75',
        savings: '311,92',
        renewal: 'Renove com 18% de desconto por R$ 21,99/mês',
        domainInfo: '1 ano de domínio .online grátis'
      }
    ]
  },
  {
    key: 'plano-p',
    name: 'Plano P',
    description: 'Feito para quem está começando.',
    features: [
      'Hospedagem para 1 domínio',
      '100 GB de Armazenamento SSD',
      'Contas de E-mail Ilimitadas',
      'Domínio Grátis por 1 ano',
      'CDN Grátis para alta performance',
      'Certificado SSL Grátis',
      'Backup Diário Automático',
      'Suporte 24/7'
    ],
    options: [
      {
        period: '3anos',
        price: '9,89',
        originalPrice: '38,99',
        discount: '74% OFF',
        totalPrice: '355,51',
        savings: '1.143,12',
        renewal: 'Renove com 31% de desconto por R$ 26,69/mês',
        domainInfo: '1 ano de domínio grátis'
      },
      {
        period: '1ano',
        price: '11,69',
        originalPrice: '38,99',
        discount: '70% OFF',
        totalPrice: '139,37',
        savings: '423,50',
        renewal: 'Renove com 19% de desconto por R$ 31,39/mês',
        domainInfo: '1 ano de domínio grátis'
      },
      {
        period: '6meses',
        price: '13,69',
        originalPrice: '38,99',
        discount: '64% OFF',
        totalPrice: '82,12',
        savings: '151,82',
        renewal: 'Renove com 5% de desconto por R$ 36,99/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      },
      {
        period: '1mes',
        price: '38,99',
        originalPrice: '38,99',
        discount: '0% OFF',
        totalPrice: '38,99',
        savings: '0',
        renewal: 'Renove por R$ 38,99/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      }
    ]
  },
  {
    key: 'plano-m',
    name: 'Plano M',
    description: 'Ideal para continuar crescendo.',
    features: [
      'Hospedagem para sites ilimitados',
      '100 GB de Armazenamento SSD',
      'Contas de E-mail Ilimitadas',
      'Domínio Grátis por 1 ano',
      'CDN Grátis com servidores globais',
      'Suporte Técnico Prioritário',
      'Certificado SSL Grátis',
      'Backup Diário Automático'
    ],
    options: [
      {
        period: '3anos',
        price: '13,89',
        originalPrice: '45,19',
        discount: '69% OFF',
        totalPrice: '499,54',
        savings: '1.222,29',
        renewal: 'Renove com 23% de desconto por R$ 34,69/mês',
        domainInfo: '1 ano de domínio grátis'
      },
      {
        period: '1ano',
        price: '15,59',
        originalPrice: '45,19',
        discount: '65% OFF',
        totalPrice: '186,19',
        savings: '451,08',
        renewal: 'Renove com 14% de desconto por R$ 38,79/mês',
        domainInfo: '1 ano de domínio grátis'
      },
      {
        period: '6meses',
        price: '16,89',
        originalPrice: '45,19',
        discount: '62% OFF',
        totalPrice: '100,78',
        savings: '170,36',
        renewal: 'Renove com 7% de desconto por R$ 41,99/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      },
      {
        period: '1mes',
        price: '45,19',
        originalPrice: '45,19',
        discount: '0% OFF',
        totalPrice: '45,19',
        savings: '0',
        renewal: 'Renove por R$ 45,19/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      }
    ]
  },
  {
    key: 'plano-turbo',
    name: 'Plano Turbo',
    description: 'Perfeito para sites com alto tráfego.',
    features: [
      'Hospedagem para sites ilimitados',
      '150 GB de Armazenamento SSD',
      'Contas de E-mail Ilimitadas',
      'Performance Turbo (Servidores Premium)',
      '2 Domínios Grátis por 1 ano',
      'Suporte VIP 24/7 com especialistas',
      'CDN Premium Global',
      'Backup Diário Automático'
    ],
    options: [
      {
        period: '3anos',
        price: '25,69',
        originalPrice: '62,89',
        discount: '59% OFF',
        totalPrice: '923,24',
        savings: '1.543,78',
        renewal: 'Renove com 27% de desconto por R$ 45,89/mês',
        domainInfo: '2 anos de domínio grátis'
      },
      {
        period: '1ano',
        price: '28,99',
        originalPrice: '62,89',
        discount: '54% OFF',
        totalPrice: '346,79',
        savings: '583,09',
        renewal: 'Renove com 19% de desconto por R$ 50,99/mês',
        domainInfo: '1 ano de domínio grátis'
      },
      {
        period: '6meses',
        price: '31,99',
        originalPrice: '62,89',
        discount: '49% OFF',
        totalPrice: '191,22',
        savings: '186,12',
        renewal: 'Renove com 9% de desconto por R$ 56,99/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      },
      {
        period: '1mes',
        price: '62,89',
        originalPrice: '62,89',
        discount: '0% OFF',
        totalPrice: '62,89',
        savings: '0',
        renewal: 'Renove por R$ 62,89/mês',
        domainInfo: 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.'
      }
    ]
  }
];

export type { Plan, PlanOption };
