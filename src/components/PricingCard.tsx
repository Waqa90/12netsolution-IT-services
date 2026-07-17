import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  onSelect: () => void;
}

export default function PricingCard({
  name,
  price,
  period = 'month',
  description,
  features,
  highlighted = false,
  buttonText = 'Get Started',
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl ${
        highlighted
          ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-brand-900 shadow-2xl scale-105'
          : 'bg-white border-t-4 border-t-accent-400 border-x-2 border-b-2 border-gray-200'
      } p-8 transition-all duration-300 hover:shadow-xl`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-brand-800' : 'text-gray-600'}`}>
        {description}
      </p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className={`text-lg ${highlighted ? 'text-brand-800' : 'text-gray-600'}`}>/{period}</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className={`flex-shrink-0 mt-0.5 ${highlighted ? 'text-brand-700' : 'text-accent-600'}`}
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
          highlighted
            ? 'bg-brand-900 text-white hover:bg-brand-800'
            : 'bg-accent-500 text-brand-900 hover:bg-accent-600'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
