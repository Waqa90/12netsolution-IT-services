import { LucideIcon, ArrowRight, Check } from 'lucide-react';

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  process: string[];
  pricing?: string;
}

export default function ServiceDetail({
  icon: Icon,
  title,
  description,
  benefits,
  features,
  process,
  pricing,
}: ServiceDetailProps) {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon size={64} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-blue-100 mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#book"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book This Service
                <ArrowRight size={20} />
              </a>
              <a
                href="#quote"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose Our Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What's Included</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{feature}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Process</h2>
            <div className="relative">
              {process.map((step, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {pricing && (
            <section className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Starting From</h2>
              <p className="text-4xl font-bold text-blue-600 mb-4">{pricing}</p>
              <p className="text-gray-600 mb-6">
                Final price depends on your specific requirements. Request a detailed quote for accurate pricing.
              </p>
              <a
                href="#quote"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Detailed Quote
              </a>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
