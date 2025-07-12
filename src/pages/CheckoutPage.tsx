import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, Smartphone, Lock, User, Mail, Phone, Calendar, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { plans } from '../lib/plans';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planName = searchParams.get('plan') || 'plano-start';
  const period = searchParams.get('period') || '3anos';
  
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit'>('pix');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    installments: '1'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentPlan = plans.find(plan => plan.key === planName);
  const planOption = currentPlan?.options.find(opt => opt.period === period);

  if (!currentPlan || !planOption) {
    return <div>Plano não encontrado</div>;
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Dados pessoais obrigatórios para qualquer pagamento
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.cpf.trim()) newErrors.cpf = 'CPF é obrigatório';

    // Validação específica do cartão
    if (paymentMethod === 'credit') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Número do cartão é obrigatório';
      if (!formData.cardName.trim()) newErrors.cardName = 'Nome no cartão é obrigatório';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Data de vencimento é obrigatória';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Processar pagamento
      console.log('Processando pagamento...', { paymentMethod, formData });
    }
  };

  const formatCurrency = (value: string) => {
    return `R$ ${value.replace('.', ',')}`;
  };

  // Opções de parcelamento completas
  const calculateInstallment = (totalPrice: number, installments: number) => {
    if (installments === 1) {
      return totalPrice; // À vista sem juros
    }
    
    const monthlyRate = 0.0299; // 2.99% a.m.
    const totalWithInterest = totalPrice * Math.pow(1 + monthlyRate, installments);
    return totalWithInterest / installments;
  };

  const totalPriceNumber = parseFloat(planOption.totalPrice.replace(',', '.'));
  
  const installmentOptions = [
    { 
      value: '1', 
      label: `1x de ${formatCurrency(planOption.totalPrice)} (à vista)`, 
      discount: 'Sem juros',
      price: totalPriceNumber 
    },
    { 
      value: '2', 
      label: `2x de ${formatCurrency((calculateInstallment(totalPriceNumber, 2)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 2) * 2
    },
    { 
      value: '3', 
      label: `3x de ${formatCurrency((calculateInstallment(totalPriceNumber, 3)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 3) * 3
    },
    { 
      value: '4', 
      label: `4x de ${formatCurrency((calculateInstallment(totalPriceNumber, 4)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 4) * 4
    },
    { 
      value: '5', 
      label: `5x de ${formatCurrency((calculateInstallment(totalPriceNumber, 5)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 5) * 5
    },
    { 
      value: '6', 
      label: `6x de ${formatCurrency((calculateInstallment(totalPriceNumber, 6)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 6) * 6
    },
    { 
      value: '7', 
      label: `7x de ${formatCurrency((calculateInstallment(totalPriceNumber, 7)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 7) * 7
    },
    { 
      value: '8', 
      label: `8x de ${formatCurrency((calculateInstallment(totalPriceNumber, 8)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 8) * 8
    },
    { 
      value: '9', 
      label: `9x de ${formatCurrency((calculateInstallment(totalPriceNumber, 9)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 9) * 9
    },
    { 
      value: '10', 
      label: `10x de ${formatCurrency((calculateInstallment(totalPriceNumber, 10)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 10) * 10
    },
    { 
      value: '11', 
      label: `11x de ${formatCurrency((calculateInstallment(totalPriceNumber, 11)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 11) * 11
    },
    { 
      value: '12', 
      label: `12x de ${formatCurrency((calculateInstallment(totalPriceNumber, 12)).toFixed(2).replace('.', ','))}`, 
      discount: '2,99% a.m.',
      price: calculateInstallment(totalPriceNumber, 12) * 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Padronizado */}
      <header className="bg-white border-b border-gray-200 w-full sticky top-0 z-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <div 
              className="text-2xl font-bold text-gray-800 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Place
            </div>
            {/* Progress Steps on the right */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm font-medium text-blue-600">Dados</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm text-gray-500">Pagamento</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Payment Method Selection - Compactado */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Como você quer pagar?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* PIX */}
                <div
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('pix')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">PIX</div>
                      <div className="text-xs text-green-600 font-medium">Aprovação na hora</div>
                    </div>
                  </div>
                </div>

                {/* Cartão */}
                <div
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    paymentMethod === 'credit'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('credit')}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Cartão de Crédito</div>
                      <div className="text-xs text-blue-600 font-medium">Até 12x com juros</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dados Pessoais - Sempre visível */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-blue-600" />
                <span>Seus dados pessoais</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Nome Completo *</Label>
                  <Input
                    id="name"
                type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-sm font-medium text-gray-700">CPF *</Label>
                  <Input
                    id="cpf"
                type="text"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    className={`mt-1 ${errors.cpf ? 'border-red-500' : ''}`}
                  />
                  {errors.cpf && <div className="text-sm text-red-600 mt-1">{errors.cpf}</div>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
                  <Input
                    id="email"
                type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Celular *</Label>
                  <Input
                    id="phone"
                type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <div className="text-sm text-red-600 mt-1">{errors.phone}</div>}
                </div>
              </div>
            </Card>

            {/* Dados do Cartão - Apenas se cartão selecionado */}
            {paymentMethod === 'credit' && (
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Dados do cartão</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">Número do Cartão *</Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className={`mt-1 ${errors.cardNumber ? 'border-red-500' : ''}`}
                    />
                    {errors.cardNumber && <div className="text-sm text-red-600 mt-1">{errors.cardNumber}</div>}
                  </div>

                  <div>
                    <Label htmlFor="cardName" className="text-sm font-medium text-gray-700">Nome no Cartão *</Label>
                    <Input
                      id="cardName"
                type="text"
                      placeholder="Nome como está no cartão"
                      value={formData.cardName}
                      onChange={(e) => handleInputChange('cardName', e.target.value)}
                      className={`mt-1 ${errors.cardName ? 'border-red-500' : ''}`}
                    />
                    {errors.cardName && <div className="text-sm text-red-600 mt-1">{errors.cardName}</div>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">Vencimento *</Label>
                      <Input
                        id="expiryDate"
                  type="text"
                        placeholder="MM/AA"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className={`mt-1 ${errors.expiryDate ? 'border-red-500' : ''}`}
                      />
                      {errors.expiryDate && <div className="text-sm text-red-600 mt-1">{errors.expiryDate}</div>}
                    </div>

                    <div>
                      <Label htmlFor="cvv" className="text-sm font-medium text-gray-700">CVV *</Label>
                      <Input
                        id="cvv"
                  type="text"
                        placeholder="000"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className={`mt-1 ${errors.cvv ? 'border-red-500' : ''}`}
                      />
                      {errors.cvv && <div className="text-sm text-red-600 mt-1">{errors.cvv}</div>}
                    </div>
              </div>

                  {/* Parcelamento */}
                  <div>
                    <Label htmlFor="installments" className="text-sm font-medium text-gray-700">Parcelamento</Label>
                    <select
                      id="installments"
                      value={formData.installments}
                      onChange={(e) => handleInputChange('installments', e.target.value)}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {installmentOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label} - {option.discount}
                        </option>
                      ))}
                    </select>
            </div>
          </div>
              </Card>
            )}

            {/* PIX Instructions - Apenas se PIX selecionado */}
            {paymentMethod === 'pix' && (
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Como funciona o PIX</span>
                </h3>
                <div className="space-y-3 text-sm text-green-700">
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Após confirmar, você receberá o código PIX</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Pague no seu banco ou carteira digital</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Seu Criador de Sites com IA é ativado automaticamente</span>
                  </div>
                </div>
              </Card>
            )}
              </div>
              
          {/* Sticky Summary - Right Column */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumo do Pedido</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-900">{currentPlan.name}</div>
                      <div className="text-sm text-gray-600">{planOption.period === '3anos' ? '3 Anos' : planOption.period}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                        {planOption.discount}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Valor mensal:</span>
                      <span className="font-bold text-blue-600">{formatCurrency(planOption.price)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total:</span>
                      <span className="text-xl font-bold text-gray-900">{formatCurrency(planOption.totalPrice)}</span>
                    </div>
                    {planOption.savings !== '0' && (
                      <div className="text-sm text-green-600 text-right mt-1">
                        Você economiza {formatCurrency(planOption.savings)}
                      </div>
                    )}
                  </div>
              </div>
              
                {/* Includes */}
                <div className="mb-6 space-y-2">
                  <div className="text-sm font-medium text-gray-900 mb-3">Incluído no seu plano:</div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-gray-700">Criador de Sites com IA incluído</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-gray-700">Domínio grátis por 1 ano</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-gray-700">SSL grátis incluído</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-gray-700">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-gray-700">Garantia de 30 dias</span>
                  </div>
              </div>

                {/* Final CTA */}
              <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 text-lg rounded-xl shadow-lg"
              >
                  {paymentMethod === 'pix' ? 'Gerar PIX' : 'Finalizar Compra'}
              </Button>

                {/* Trust Signals */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <Shield className="w-3 h-3" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <Lock className="w-3 h-3" />
                    <span>Dados protegidos com SSL</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <Calendar className="w-3 h-3" />
                    <span>Garantia de 30 dias</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Fixed Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-bold text-gray-900">{currentPlan.name}</div>
              <div className="text-sm text-gray-600">Total: {formatCurrency(planOption.totalPrice)}</div>
            </div>
            <div className="text-xl font-bold text-blue-600">{formatCurrency(planOption.price)}/mês</div>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 text-lg rounded-xl"
          >
            {paymentMethod === 'pix' ? 'Gerar PIX' : 'Finalizar Compra'}
          </Button>
        </div>
      </div>

      {/* Mobile Spacer */}
      <div className="lg:hidden h-32"></div>
    </div>
  );
};

export default CheckoutPage;

