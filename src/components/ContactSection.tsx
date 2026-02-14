import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">
            Ready to solve your IT challenges? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={28} />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+6798463328" className="text-gray-300 hover:text-white transition-colors">+679 846 3328</a>
            <p className="text-sm text-gray-400 mt-1">Mon-Sat 8am-6pm</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:info@12netsolution.com" className="text-gray-300 hover:text-white transition-colors">info@12netsolution.com</a>
            <p className="text-sm text-gray-400 mt-1">24/7 email support</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="font-semibold mb-2">Service Area</h3>
            <p className="text-gray-300">All of Fiji</p>
            <p className="text-sm text-gray-400 mt-1">Islands-wide coverage</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h3 className="font-semibold mb-2">Emergency Support</h3>
            <p className="text-gray-300">Same-day service</p>
            <p className="text-sm text-gray-400 mt-1">Available 7 days/week</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#book"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Your Service Now
          </a>
        </div>
      </div>
    </section>
  );
}
