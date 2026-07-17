import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white text-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="h-20 w-auto flex items-center justify-center">
              <img src="/logo.png" alt="12Net Solution - IT Services in Nadi" className="h-20 w-auto" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="block bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        )}
      </div>

      <div className="bg-gray-50 border-t border-gray-200 py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Phone size={14} />
            <a href="tel:+6798463328" className="hover:text-brand-600 transition-colors">
              +679 846 3328
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Mail size={14} />
            <span>waqa@12netsolution.com</span>
          </div>
          <div className="text-gray-500">
            Serving all of Nadi
          </div>
        </div>
      </div>
    </header>
  );
}
