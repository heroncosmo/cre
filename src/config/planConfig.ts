import pricingConfig from './pricing';
import { getPlanFeatures } from './features';

export interface PlanOption {
  period: string;
  price: string;
  originalPrice: string;
  discount: string;
  totalPrice: string;
  savings: string;
  renewal: string;
  domainInfo: string;
}

export interface PlanConfig {
  name: string;
  description: string;
  features: string[];
  options: PlanOption[];
}

// Plan descriptions
export const planDescriptions = {
  'plano-start': 'O primeiro passo para iniciar sua jornada digital.',
  'plano-p': 'Feito para quem está começando.',
  'plano-m': 'Ideal para continuar crescendo.',
  'plano-turbo': 'Perfeito para sites com alto tráfego.'
} as const;

// Utility function to get original price based on the period and plan
const getOriginalPrice = (period: string, planKey: string): string => {
  const originalPrices = {
    'plano-start': '26,89',
    'plano-p': '38,99',
    'plano-m': '45,19',
    'plano-turbo': '62,89'
  };
  return originalPrices[planKey as keyof typeof originalPrices] || '0,00';
};

// Utility function to get renewal info
const getRenewalInfo = (renewalPrice: string, discount: string): string => {
  if (discount === '0% OFF') {
    return `Renove por R$ ${renewalPrice}/mês`;
  }
  const discountNum = parseInt(discount.replace('% OFF', ''));
  const renewalDiscount = Math.max(0, Math.round(discountNum * 0.5)); // Roughly half the initial discount
  return `Renove com ${renewalDiscount}% de desconto por R$ ${renewalPrice}/mês`;
};

// Utility function to get domain info
const getDomainInfo = (freeDomains: number, period: string): string => {
  if (freeDomains === 0) {
    return 'Dica para economizar: selecione um ciclo mais longo e ganhe um domínio grátis.';
  }
  if (freeDomains === 1) {
    return period === '3anos' ? '1 ano de domínio .online grátis' : '1 ano de domínio grátis';
  }
  return period === '6meses' || period === '1mes' 
    ? 'Dica para economizar: selecione um ciclo mais longo e ganhe dois domínios grátis.'
    : 'Ganhe 2 domínios grátis';
};

// Generate plan configurations from pricing config
export const planConfigs: Record<string, PlanConfig> = Object.entries(pricingConfig).reduce((configs, [planKey, planData]) => {
  const options: PlanOption[] = planData.tiers.map(tier => ({
    period: tier.period,
    price: tier.price,
    originalPrice: getOriginalPrice(tier.period, planKey),
    discount: tier.discount,
    totalPrice: tier.total,
    savings: tier.savings,
    renewal: getRenewalInfo(tier.renewalPrice, tier.discount),
    domainInfo: getDomainInfo(tier.freeDomains, tier.period)
  }));

  configs[planKey] = {
    name: planData.name,
    description: planDescriptions[planKey as keyof typeof planDescriptions] || '',
    features: getPlanFeatures(planKey),
    options
  };

  return configs;
}, {} as Record<string, PlanConfig>);

// Utility function to get price for a specific period and plan
export const getPrice = (period: string, planKey: string): string | null => {
  const plan = planConfigs[planKey];
  if (!plan) return null;
  
  const option = plan.options.find(opt => opt.period === period);
  return option?.price || null;
};

// Utility function to find the cheapest period for a plan
export const getCheapestPeriod = (planKey: string): string => {
  const plan = planConfigs[planKey];
  if (!plan || !plan.options.length) return '3anos'; // Default fallback
  
  // Convert prices to numbers for comparison (replace comma with dot)
  let cheapestOption = plan.options[0];
  let cheapestPrice = parseFloat(cheapestOption.price.replace(',', '.'));
  
  for (const option of plan.options) {
    const price = parseFloat(option.price.replace(',', '.'));
    if (price < cheapestPrice) {
      cheapestPrice = price;
      cheapestOption = option;
    }
  }
  
  return cheapestOption.period;
};

export default planConfigs;
