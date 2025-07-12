// Shared features base that can be used across plans
export const featuresBase = [
  'Certificado SSL Grátis',
  'Backup Diário Automático',
  'Suporte 24/7'
];

// Plan-specific features (excluding the base features)
export const planFeatures = {
  'plano-start': [
    'Hospedagem para 1 domínio',
    '50 GB de Armazenamento SSD',
    '3 Contas de E-mail Profissional',
    'Domínio Grátis por 1 ano'
  ],
  'plano-p': [
    'Hospedagem para 1 domínio',
    '100 GB de Armazenamento SSD',
    'Contas de E-mail Ilimitadas',
    'Domínio Grátis por 1 ano',
    'CDN Grátis para alta performance'
  ],
  'plano-m': [
    'Hospedagem para sites ilimitados',
    '100 GB de Armazenamento SSD',
    'Contas de E-mail Ilimitadas',
    'Domínio Grátis por 1 ano',
    'CDN Grátis com servidores globais',
    'Suporte Técnico Prioritário'
  ],
  'plano-turbo': [
    'Hospedagem para sites ilimitados',
    '150 GB de Armazenamento SSD',
    'Contas de E-mail Ilimitadas',
    'Performance Turbo (Servidores Premium)',
    '2 Domínios Grátis por 1 ano',
    'Suporte VIP 24/7 com especialistas',
    'CDN Premium Global'
  ]
} as const;

// Function to get complete features for a plan
export const getPlanFeatures = (planKey: string): string[] => {
  const specific = planFeatures[planKey as keyof typeof planFeatures] || [];
  return [...specific, ...featuresBase];
};
