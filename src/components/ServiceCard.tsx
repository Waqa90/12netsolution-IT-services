import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  onLearnMore: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, features, onLearnMore }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white">
        <Icon size={40} className="mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
