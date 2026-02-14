import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable IT Support in Fiji
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Professional technology solutions for homes and businesses. Expert installation, support, and maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#book"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              Book a Service
              <ArrowRight size={20} />
            </a>
            <a
              href="#quote"
              className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="text-green-400 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">Fast Response</h3>
              <p className="text-sm text-gray-300">Same-day service available for urgent requests</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="text-green-400 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-300">Certified professionals with years of experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="text-green-400 mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-gray-300">Serving all areas across Fiji</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
}
