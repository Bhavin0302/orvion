import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-orange-500 to-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white">O</span>
              </div>
              <span className="text-xl bg-gradient-to-r from-blue-600 via-orange-600 to-green-600 bg-clip-text text-transparent">Orvion</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
              Product
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">
              Resources
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sign in
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-lg"
            >
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
                Product
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                Resources
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="text-gray-700 w-full hover:text-blue-600">
                  Sign in
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 text-white w-full">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
