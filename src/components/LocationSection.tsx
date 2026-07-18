import { MapPin, Navigation } from 'lucide-react';

export default function LocationSection() {
  const address = '6FGF+HXC, Votualevu, Fiji';
  const coordinates = '-17.773599,177.476296';
  const mapsQuery = encodeURIComponent(coordinates);

  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based in Votualevu, serving all of Nadi
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-t-accent-400">
          <div className="aspect-[16/9] w-full">
            <iframe
              title="12Net Solution location map"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-accent-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="text-accent-600" size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{address}</p>
                <p className="text-sm text-gray-600">Serving all of Nadi</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brand-900 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
