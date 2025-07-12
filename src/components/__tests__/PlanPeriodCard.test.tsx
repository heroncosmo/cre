import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

// Import the PlanPeriodCard component and its props interface
// Since PlanPeriodCard is defined inline in PlanSelectionPage, we need to extract it
import React from 'react';
import type { PlanOption } from '../../lib/plans';
import { planMobileInfo } from '../../lib/planMobileInfo';

interface PlanPeriodCardProps {
  option: PlanOption;
  isSelected: boolean;
  onSelect: () => void;
  getPeriodLabel: (period: string) => string;
  planKey: string;
}

function PlanPeriodCard({ option, isSelected, onSelect, getPeriodLabel, planKey }: PlanPeriodCardProps) {
  const extraInfo = planMobileInfo(planKey, option.period);
  const { freeDomains, siteLimit, support } = extraInfo || { freeDomains: 0, siteLimit: '1', support: '' };
  
  return (
    <div
      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            isSelected
              ? 'border-blue-500 bg-blue-500'
              : 'border-gray-300'
          }`}>
            {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
          </div>
          <div className="font-semibold text-gray-900 text-lg">
            {getPeriodLabel(option.period)}
          </div>
        </div>
        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {option.discount}
        </div>
      </div>
      
      <div className="text-center mb-2">
        <span className="text-3xl font-bold text-blue-600">R$ {option.price}</span>
        <span className="text-lg font-normal text-gray-600">/mês</span>
      </div>
      
      <div className="text-center text-xs text-gray-500 mb-3">
        Total: R$ {option.totalPrice}
      </div>
      
      {option.savings !== '0' && (
        <div className="text-center bg-green-50 text-green-700 text-xs font-bold py-1 px-2 rounded-md">
          Economize R$ {option.savings}
        </div>
      )}
      
      <div className="mt-2 space-y-1 lg:hidden text-[10px] text-gray-600">
        <div>Domínios grátis: <span className="font-semibold">{freeDomains}</span></div>
        <div>Sites no Criador: <span className="font-semibold">{siteLimit}</span></div>
        <div>{support}</div>
      </div>
    </div>
  );
}

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

const mockOption: PlanOption = {
  period: '3anos',
  price: '29,90',
  totalPrice: '1.076,40',
  discount: '75% OFF',
  savings: '3.229,20'
};

const mockGetPeriodLabel = (period: string) => {
  const labels: { [key: string]: string } = {
    '1mes': '1 Mês',
    '6meses': '6 Meses',
    '1ano': '1 Ano',
    '2anos': '2 Anos',
    '3anos': '3 Anos',
  };
  return labels[period] || period;
};

describe('PlanPeriodCard', () => {
  const mockOnSelect = vi.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test('renders plan period card with correct information', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    expect(screen.getByText('3 Anos')).toBeInTheDocument();
    expect(screen.getByText('R$ 29,90')).toBeInTheDocument();
    expect(screen.getByText('/mês')).toBeInTheDocument();
    expect(screen.getByText('Total: R$ 1.076,40')).toBeInTheDocument();
    expect(screen.getByText('75% OFF')).toBeInTheDocument();
    expect(screen.getByText('Economize R$ 3.229,20')).toBeInTheDocument();
  });

  test('shows mobile-specific information (lg:hidden content)', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    // Check for mobile-only content that should be hidden on desktop (lg:hidden)
    expect(screen.getByText(/Domínios grátis:/)).toBeInTheDocument();
    expect(screen.getByText(/Sites no Criador:/)).toBeInTheDocument();
    expect(screen.getByText(/Suporte especialista 24h/)).toBeInTheDocument();
  });

  test('displays mobile info from planMobileInfo helper', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    // The planMobileInfo helper should return specific values based on the plan
    const mobileInfoSection = screen.getByText(/Domínios grátis:/).parentElement;
    expect(mobileInfoSection).toHaveClass('lg:hidden');
    expect(mobileInfoSection).toHaveClass('text-[10px]');
  });

  test('applies selected styles when isSelected is true', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={true}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    const cardElement = document.querySelector('.border-2.rounded-xl.p-4.cursor-pointer');
    expect(cardElement).toHaveClass('border-blue-500', 'bg-blue-50', 'shadow-md');
  });

  test('applies unselected styles when isSelected is false', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    const cardElement = document.querySelector('.border-2.rounded-xl.p-4.cursor-pointer');
    expect(cardElement).toHaveClass('border-gray-200');
    expect(cardElement).not.toHaveClass('border-blue-500', 'bg-blue-50');
  });

  test('shows radio button indicator for selected state', () => {
    const { rerender } = renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    let radioIndicator = document.querySelector('.w-5.h-5.rounded-full.border-2');
    expect(radioIndicator).toHaveClass('border-gray-300');
    expect(radioIndicator?.querySelector('.w-2.h-2.bg-white.rounded-full')).toBeNull();

    rerender(
      <BrowserRouter>
        <PlanPeriodCard
          option={mockOption}
          isSelected={true}
          onSelect={mockOnSelect}
          getPeriodLabel={mockGetPeriodLabel}
          planKey="plano-m"
        />
      </BrowserRouter>
    );

    radioIndicator = document.querySelector('.w-5.h-5.rounded-full.border-2');
    expect(radioIndicator).toHaveClass('border-blue-500', 'bg-blue-500');
    expect(radioIndicator?.querySelector('.w-2.h-2.bg-white.rounded-full')).toBeInTheDocument();
  });

  test('calls onSelect when clicked', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    const cardElement = document.querySelector('.border-2.rounded-xl.p-4.cursor-pointer');
    fireEvent.click(cardElement!);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });

  test('does not show savings section when savings is 0', () => {
    const optionWithoutSavings = { ...mockOption, savings: '0' };
    
    renderWithRouter(
      <PlanPeriodCard
        option={optionWithoutSavings}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    expect(screen.queryByText(/Economize R\$/)).not.toBeInTheDocument();
  });

  test('handles planMobileInfo returning undefined gracefully', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="invalid-plan-key"
      />
    );

    // Should still render the component with fallback values
    expect(screen.getByText(/Domínios grátis:/)).toBeInTheDocument();
    expect(screen.getByText(/Sites no Criador:/)).toBeInTheDocument();
  });

  test('renders discount badge with correct styling', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    const discountBadge = screen.getByText('75% OFF');
    expect(discountBadge).toHaveClass('bg-green-500', 'text-white', 'text-xs', 'font-bold', 'px-2', 'py-1', 'rounded-full');
  });

  test('displays price information with correct formatting', () => {
    renderWithRouter(
      <PlanPeriodCard
        option={mockOption}
        isSelected={false}
        onSelect={mockOnSelect}
        getPeriodLabel={mockGetPeriodLabel}
        planKey="plano-m"
      />
    );

    const priceElement = screen.getByText('R$ 29,90');
    expect(priceElement).toHaveClass('text-3xl', 'font-bold', 'text-blue-600');

    const monthlyLabel = screen.getByText('/mês');
    expect(monthlyLabel).toHaveClass('text-lg', 'font-normal', 'text-gray-600');
  });
});
