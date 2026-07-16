import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-12 w-auto flex items-center justify-center">
                <img src="/logo.png" alt="12Net Solution - IT Services in Nadi" className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Professional IT support and technology services for homes and businesses across Nadi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-600 hover:text-brand-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-brand-600 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-brand-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#starlink" className="text-gray-600 hover:text-brand-600 transition-colors">Starlink Installation</a></li>
              <li><a href="#wifi" className="text-gray-600 hover:text-brand-600 transition-colors">WiFi Setup</a></li>
              <li><a href="#cctv" className="text-gray-600 hover:text-brand-600 transition-colors">CCTV Systems</a></li>
              <li><a href="#repair" className="text-gray-600 hover:text-brand-600 transition-colors">Computer Repair</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-brand-600 transition-colors">IT Support</a></li>
              <li><a href="#cabling" className="text-gray-600 hover:text-brand-600 transition-colors">Network Cabling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+6798463328" className="text-gray-600 hover:text-brand-600 transition-colors">+679 846 3328</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:waqa@12netsolution.com" className="text-gray-600 hover:text-brand-600 transition-colors">waqa@12netsolution.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-600">Serving all of Nadi</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 12Net Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
