import React, { useState, useEffect } from 'react';
import { getCheckoutUsers } from '../lib/supabase';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { User, Mail, Phone, CreditCard, Calendar, Eye } from 'lucide-react';

interface CheckoutUser {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  plano: string;
  periodo: string;
  forma_pagamento: string;
  valor: number;
  status: string;
  data_criacao: string;
  outros: any;
}

export const CheckoutUsersPage = () => {
  const [users, setUsers] = useState<CheckoutUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<CheckoutUser | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await getCheckoutUsers();
      setUsers(data || []);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800';
      case 'aprovado':
        return 'bg-green-100 text-green-800';
      case 'rejeitado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    return method === 'pix' ? '💳' : '🏦';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando usuários...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Usuários do Checkout</h1>
          <p className="text-gray-600">Total de usuários: {users.length}</p>
          <Button 
            onClick={loadUsers}
            className="mt-4 bg-blue-600 hover:bg-blue-700"
          >
            Atualizar Lista
          </Button>
        </div>

        <div className="grid gap-6">
          {users.map((user) => (
            <Card key={user.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{user.nome}</h3>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(user.status)}>
                  {user.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{user.telefone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    {getPaymentMethodIcon(user.forma_pagamento)} {user.forma_pagamento.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{formatDate(user.data_criacao)}</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-green-600">{formatCurrency(user.valor)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{user.plano}</span>
                  </div>
                  <div className="bg-blue-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-blue-700">{user.periodo}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Ver Detalhes</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {users.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum usuário encontrado</h3>
            <p className="text-gray-600">Ainda não há usuários que fizeram checkout.</p>
          </div>
        )}

        {/* Modal de Detalhes */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="max-w-2xl w-full mx-4 p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Detalhes do Usuário</h3>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                  <p className="text-lg text-gray-900">{selectedUser.nome}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-lg text-gray-900">{selectedUser.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <p className="text-lg text-gray-900">{selectedUser.telefone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Plano</label>
                  <p className="text-lg text-gray-900">{selectedUser.plano}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Período</label>
                  <p className="text-lg text-gray-900">{selectedUser.periodo}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Forma de Pagamento</label>
                  <p className="text-lg text-gray-900">{selectedUser.forma_pagamento}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Valor</label>
                  <p className="text-lg text-gray-900">{formatCurrency(selectedUser.valor)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <Badge className={getStatusColor(selectedUser.status)}>
                    {selectedUser.status}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Data de Criação</label>
                  <p className="text-lg text-gray-900">{formatDate(selectedUser.data_criacao)}</p>
                </div>
                {selectedUser.outros && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Dados Adicionais</label>
                    <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                      {JSON.stringify(selectedUser.outros, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutUsersPage;
