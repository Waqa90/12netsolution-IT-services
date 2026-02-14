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
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              12N
            </div>
            <div>
              <h1 className="text-xl font-bold">12Net Solution</h1>
              <p className="text-xs text-gray-300">IT Services & Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
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
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="block bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        )}
      </div>

      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+6798463328" className="hover:text-blue-400 transition-colors">+679 846 3328</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@12netsolution.com</span>
          </div>
          <div className="text-gray-400">
            Serving all of Fiji
          </div>
        </div>
      </div>
    </header>
  );
}
