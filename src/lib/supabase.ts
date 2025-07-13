import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zuamtvhoswteqgzvoksl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1YW10dmhvc3d0ZXFnenZva3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODUzOTcsImV4cCI6MjA2MDA2MTM5N30.oHUDxTMYhEiAhOZsYcHQvqCnxfD0uET0D_K4ii6O8u8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipo para os dados do checkout
export interface CheckoutUser {
  id?: string
  nome: string
  email: string
  telefone: string
  plano: string
  periodo: string
  forma_pagamento: string
  valor: number
  status?: string
  data_criacao?: string
  outros?: any
}

// Função para salvar dados do checkout
export const saveCheckoutData = async (data: CheckoutUser) => {
  try {
    const { data: result, error } = await supabase
      .from('checkout_users')
      .insert([data])
      .select()
    
    if (error) {
      console.error('Erro ao salvar dados do checkout:', error)
      throw error
    }
    
    return result
  } catch (error) {
    console.error('Erro ao salvar dados do checkout:', error)
    throw error
  }
}

// Função para buscar todos os usuários do checkout
export const getCheckoutUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('checkout_users')
      .select('*')
      .order('data_criacao', { ascending: false })
    
    if (error) {
      console.error('Erro ao buscar usuários do checkout:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Erro ao buscar usuários do checkout:', error)
    throw error
  }
}
