import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  comment: string;
  service: string;
}

export default function TestimonialCard({ name, role, rating, comment, service }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"{comment}"</p>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-xs text-blue-600 mt-1">{service}</p>
      </div>
    </div>
  );
}
