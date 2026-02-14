import { Clock, Award, Shield, ThumbsUp, Users, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'Fast Response Time',
      description: 'Same-day service available for urgent requests. We understand your time is valuable.',
    },
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and has years of hands-on experience.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All our work comes with a satisfaction guarantee and warranty coverage.',
    },
    {
      icon: ThumbsUp,
      title: 'Customer First',
      description: 'We prioritize your satisfaction and provide personalized solutions.',
    },
    {
      icon: Users,
      title: 'Local Team',
      description: 'Based in Fiji, we understand local needs and provide ongoing support.',
    },
    {
      icon: Zap,
      title: 'Modern Solutions',
      description: 'We use the latest technology and best practices for reliable results.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for all IT needs in Fiji
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <reason.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
