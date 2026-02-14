import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                12N
              </div>
              <div>
                <h3 className="text-lg font-bold">12Net Solution</h3>
                <p className="text-xs text-gray-400">IT Services & Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional IT support and technology services for homes and businesses across Fiji.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#starlink" className="text-gray-400 hover:text-white transition-colors">Starlink Installation</a></li>
              <li><a href="#wifi" className="text-gray-400 hover:text-white transition-colors">WiFi Setup</a></li>
              <li><a href="#cctv" className="text-gray-400 hover:text-white transition-colors">CCTV Systems</a></li>
              <li><a href="#repair" className="text-gray-400 hover:text-white transition-colors">Computer Repair</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">IT Support</a></li>
              <li><a href="#cabling" className="text-gray-400 hover:text-white transition-colors">Network Cabling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+6798463328" className="text-gray-400 hover:text-white transition-colors">+679 846 3328</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@12netsolution.com" className="text-gray-400 hover:text-white transition-colors">info@12netsolution.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">Serving all of Fiji</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 12Net Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
