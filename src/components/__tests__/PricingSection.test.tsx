import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PricingSection } from '../PricingSection';
import pricingConfig from '../../config/pricing';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('PricingSection', () => {
  test('renders all plans from pricing config', () => {
    renderWithRouter(<PricingSection />);
    
    // Check if all plan names are rendered
    Object.values(pricingConfig).forEach(planData => {
      expect(screen.getByText(planData.name)).toBeInTheDocument();
    });
  });

  test('renders prices for 3-year period by default', () => {
    renderWithRouter(<PricingSection />);
    
    // Check if 3-year prices are displayed for each plan
    Object.entries(pricingConfig).forEach(([planKey, planData]) => {
      const tier3Anos = planData.tiers.find(tier => tier.period === '3anos');
      if (tier3Anos) {
        const priceText = `R$ ${tier3Anos.price.replace('.', ',')}`;
        expect(screen.getByText(priceText)).toBeInTheDocument();
      }
    });
  });

  test('displays free domain badge when freeDomains > 0', () => {
    renderWithRouter(<PricingSection />);
    
    // Count how many plans have free domains for the badge specifically
    const plansWithFreeDomains = Object.values(pricingConfig).filter(planData => {
      const tier3Anos = planData.tiers.find(tier => tier.period === '3anos');
      return tier3Anos && tier3Anos.freeDomains > 0;
    }).length;

    // Look for the purple badge specifically
    const freeDomainBadges = document.querySelectorAll('.bg-purple-100');
    expect(freeDomainBadges).toHaveLength(plansWithFreeDomains);
  });

  test('displays total price with "por 3 anos" text', () => {
    renderWithRouter(<PricingSection />);
    
    Object.values(pricingConfig).forEach(planData => {
      const tier3Anos = planData.tiers.find(tier => tier.period === '3anos');
      if (tier3Anos) {
        const totalText = `R$ ${tier3Anos.total.replace('.', ',')} por 3 anos`;
        expect(screen.getByText(totalText)).toBeInTheDocument();
      }
    });
  });

  test('displays savings information', () => {
    renderWithRouter(<PricingSection />);
    
    Object.values(pricingConfig).forEach(planData => {
      const tier3Anos = planData.tiers.find(tier => tier.period === '3anos');
      if (tier3Anos && tier3Anos.savings !== '0') {
        const savingsText = `Economize R$ ${tier3Anos.savings.replace('.', ',')}`;
        expect(screen.getByText(savingsText)).toBeInTheDocument();
      }
    });
  });

  test('renders "Começar agora" buttons', () => {
    renderWithRouter(<PricingSection />);
    
    const planCount = Object.keys(pricingConfig).length;
    const buttons = screen.getAllByText('Começar agora');
    expect(buttons).toHaveLength(planCount);
  });

  test('marks Plano M as popular', () => {
    renderWithRouter(<PricingSection />);
    
    expect(screen.getByText('Recomendado')).toBeInTheDocument();
  });

  test('displays discount percentages', () => {
    renderWithRouter(<PricingSection />);
    
    Object.values(pricingConfig).forEach(planData => {
      const tier3Anos = planData.tiers.find(tier => tier.period === '3anos');
      if (tier3Anos && tier3Anos.discount !== '0% OFF') {
        expect(screen.getByText(tier3Anos.discount)).toBeInTheDocument();
      }
    });
  });

  test('renders plan descriptions', () => {
    renderWithRouter(<PricingSection />);
    
    const descriptions = [
      'O primeiro passo para iniciar sua jornada digital.',
      'Feito para quem está começando.',
      'Ideal para continuar crescendo.',
      'Perfeito para sites com alto tráfego.'
    ];

    descriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  test('renders expand/collapse functionality', () => {
    renderWithRouter(<PricingSection />);
    
    const planCount = Object.keys(pricingConfig).length;
    const expandButtons = screen.getAllByText('Ver planos');
    expect(expandButtons).toHaveLength(planCount);
  });
});
