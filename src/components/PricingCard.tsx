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
          ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
          : 'bg-white border-2 border-gray-200'
      } p-8 transition-all duration-300 hover:shadow-xl`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`text-sm mb-6 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
        {description}
      </p>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className={`text-lg ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>/{period}</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              size={20}
              className={`flex-shrink-0 mt-0.5 ${highlighted ? 'text-green-300' : 'text-green-500'}`}
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 ${
          highlighted
            ? 'bg-white text-blue-600 hover:bg-gray-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
