
import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Place
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Hospedagem</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Domínios</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Email</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">WordPress</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Suporte</a>
          </nav>

          {/* Contact Info & Login */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>0800 123 4567</span>
            </div>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Hospedagem</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Domínios</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Email</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">WordPress</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Suporte</a>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <span>0800 123 4567</span>
              </div>
              <Button variant="outline" size="sm" className="w-fit">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
