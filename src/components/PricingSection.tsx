import { useState } from 'react';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'Home IT Support',
      price: 'FJD 150',
      period: 'month',
      description: 'Reliable, remote-first IT support for home users',
      features: [
        '1 on-site visit + up to 2 remote sessions per month',
        'Remote support via phone/email',
        'Computer maintenance and updates',
        'Virus protection and removal',
        'Network troubleshooting',
        'Extra on-site visits at discounted subscriber rate',
        '10% discount on additional services',
      ],
      highlighted: false,
    },
    {
      name: 'Business Care Plan',
      price: 'FJD 20',
      period: 'month',
      description: "For businesses that don't need IT help often, but want priority service the moment you call",
      features: [
        'Priority placement on our support queue',
        'No minimum number of visits required',
        'Covers up to 3 devices/users',
        'Fast response time guarantee',
        'Discounted rates on call-outs when needed',
        '1 discounted on-site visit per year (50% off call-out rate)',
        '2x free 30-minute remote assistance sessions monthly',
        'Or pay FJD 180/year (save FJD 60)',
      ],
      highlighted: true,
    },
    {
      name: 'Small Business Support',
      price: 'FJD 450',
      period: 'month',
      description: 'Comprehensive IT support for growing businesses',
      features: [
        'Up to 15 hours of remote support per month',
        '4 on-site visits per month',
        'Priority response time',
        'Network monitoring',
        'Server maintenance',
        'Employee IT training',
        '20% discount on additional services',
        'Free emergency call-outs (Mon-Fri, 8AM-5PM)',
      ],
      highlighted: false,
    },
    {
      name: 'Emergency Call-Out',
      price: 'FJD 120',
      period: 'visit',
      description: 'Fast, on-site support when you need it most',
      features: [
        'Same-day service',
        'Urgent problem resolution',
        'On-site diagnosis',
        'FJD 120/visit: Mon-Fri, 8AM-5PM',
        'FJD 180/visit: after-hours, weekends & public holidays',
        'No monthly commitment',
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
    <section id="pricing" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible plans designed for your budget and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              buttonText="Select Plan"
              onSelect={() => handleSelectPlan(plan.name)}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white border-l-4 border-l-accent-400 border-y border-r border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Good to Know</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <span className="font-medium text-gray-800">Business Hours:</span> Monday-Friday, 8:00 AM - 5:00 PM.
              Call-outs outside these hours (evenings, weekends, public holidays) are billed at the after-hours rate.
            </li>
            <li>
              <span className="font-medium text-gray-800">Remote support hours</span> on Small Business Support are
              fair-use capped at 15 hours/month. Additional hours are billed at your plan's discounted rate.
            </li>
            <li>
              <span className="font-medium text-gray-800">Business Care Plan</span> covers up to 3 devices/users.
              More devices? You'll need an additional plan or an upgrade to Small Business Support.
            </li>
            <li>
              <span className="font-medium text-gray-800">On-site visits</span> beyond what's included in your plan
              are billed at your plan's discounted subscriber/call-out rate, not the standard walk-in rate.
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            All plans are subject to our full{' '}
            <a href="/terms" className="text-brand-600 hover:text-brand-700 underline">
              Terms of Service
            </a>
            .
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <a
            href="/#quote"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-brand-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
