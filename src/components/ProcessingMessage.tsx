import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { MessageCircle, Clock, Phone } from 'lucide-react'

interface ProcessingMessageProps {
  paymentMethod: 'pix' | 'credit'
  onWhatsAppClick: () => void
}

export const ProcessingMessage: React.FC<ProcessingMessageProps> = ({ 
  paymentMethod, 
  onWhatsAppClick 
}) => {
  const message = paymentMethod === 'pix' 
    ? 'Estamos gerando seu código PIX...' 
    : 'Estamos processando seu pagamento...'

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="max-w-md mx-4 p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Clock className="w-12 h-12 text-blue-600 animate-pulse" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Processando...
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message}
          <br />
          <span className="text-sm">
            Isso pode demorar alguns minutos. Se precisar de ajuda, entre em contato conosco.
          </span>
        </p>
        
        <Button 
          onClick={onWhatsAppClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Falar no WhatsApp</span>
        </Button>
        
        <div className="mt-4 text-sm text-gray-500 flex items-center justify-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>(17) 98167-9818</span>
        </div>
      </Card>
    </div>
  )
}
