import { useState } from 'react';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Home IT Support',
      price: 'FJD 150',
      period: 'month',
      description: 'Perfect for home users who need reliable IT support',
      features: [
        '2 service visits per month',
        'Remote support via phone/email',
        'Computer maintenance and updates',
        'Virus protection and removal',
        'Network troubleshooting',
        '10% discount on additional services',
      ],
      highlighted: false,
    },
    {
      name: 'Small Business Support',
      price: 'FJD 450',
      period: 'month',
      description: 'Comprehensive IT support for growing businesses',
      features: [
        'Unlimited remote support',
        '4 on-site visits per month',
        'Priority response time',
        'Network monitoring',
        'Server maintenance',
        'Employee IT training',
        '20% discount on additional services',
        'Free emergency call-outs',
      ],
      highlighted: true,
    },
    {
      name: 'Emergency Call-Out',
      price: 'FJD 120',
      period: 'visit',
      description: 'Same-day urgent support when you need it most',
      features: [
        'Same-day service',
        'Urgent problem resolution',
        'On-site diagnosis',
        'Available 7 days a week',
        'No monthly commitment',
        'Pay per visit',
      ],
      highlighted: false,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const bookSection = document.getElementById('book');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible plans designed for your budget and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              buttonText="Select Plan"
              onSelect={() => handleSelectPlan(plan.name)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a
            href="#quote"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
