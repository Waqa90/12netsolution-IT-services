import { useState } from 'react';
import { Satellite, Wifi, Camera, Monitor, Headset, Cable, X, ScreenShare, Bell, DoorOpen } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Satellite,
      title: 'Starlink Installation',
      description: 'High-speed satellite internet for remote areas',
      features: [
        'Professional dish installation and alignment',
        'Optimal placement for best signal',
        'Complete setup and configuration',
        'Training on system operation',
      ],
      detailedFeatures: [
        'Site survey and optimal location assessment',
        'Professional mounting of Starlink dish',
        'Router configuration and network setup',
        'Cable routing and weatherproofing',
        'Signal strength testing and optimization',
        'Complete system demonstration and training',
      ],
      benefits: [
        'High-speed internet in remote locations',
        'No data caps or throttling',
        'Low latency for video calls and gaming',
        'Professional installation ensures optimal performance',
        'Ongoing support and maintenance available',
        'Future-proof satellite technology',
      ],
      process: [
        'Initial consultation to assess your location and needs',
        'Site survey to determine optimal dish placement',
        'Professional installation and mounting',
        'System configuration and network setup',
        'Testing and optimization for best performance',
        'Comprehensive training on system operation',
      ],
    },
    {
      icon: Wifi,
      title: 'WiFi Network Setup',
      description: 'Fast and reliable wireless coverage',
      features: [
        'Whole-home or office WiFi coverage',
        'Network security configuration',
        'Speed optimization',
        'Multiple device support',
      ],
      detailedFeatures: [
        'WiFi coverage analysis and heat mapping',
        'Strategic access point placement',
        'Dual-band or mesh network configuration',
        'WPA3 security implementation',
        'Guest network setup',
        'Bandwidth management and QoS configuration',
      ],
      benefits: [
        'Seamless coverage throughout your property',
        'Secure network protecting your data',
        'Optimized speeds for all devices',
        'Support for smart home devices',
        'Professional-grade equipment',
        'Reduced dead zones and interference',
      ],
      process: [
        'WiFi coverage assessment and planning',
        'Network design and equipment selection',
        'Installation of routers and access points',
        'Security configuration and optimization',
        'Testing and performance verification',
        'User training and documentation',
      ],
    },
    {
      icon: Camera,
      title: 'CCTV Security Systems',
      description: 'Advanced surveillance for your property',
      features: [
        'HD camera installation',
        'Remote viewing setup',
        '24/7 recording systems',
        'Motion detection alerts',
      ],
      detailedFeatures: [
        'HD/4K camera installation',
        'Night vision capabilities',
        'Mobile app configuration for remote viewing',
        'Cloud and local storage options',
        'Motion detection zones',
        'Email and push notification alerts',
      ],
      benefits: [
        'Enhanced security and peace of mind',
        'Monitor property from anywhere',
        'Deterrent for potential intruders',
        'Evidence recording for incidents',
        'Insurance premium reductions',
        'Integration with smart home systems',
      ],
      process: [
        'Security assessment and camera placement planning',
        'Equipment selection based on your needs',
        'Professional camera mounting and wiring',
        'DVR/NVR setup and configuration',
        'Mobile app setup and testing',
        'Training on system operation and features',
      ],
    },
    {
      icon: Monitor,
      title: 'Computer Repair',
      description: 'Quick diagnosis and repair services',
      features: [
        'Hardware repairs and upgrades',
        'Software troubleshooting',
        'Virus and malware removal',
        'Data recovery services',
      ],
      detailedFeatures: [
        'Complete diagnostic testing',
        'Component replacement and upgrades',
        'Operating system repair and reinstallation',
        'Driver updates and optimization',
        'Malware removal and security hardening',
        'Data backup and recovery',
      ],
      benefits: [
        'Fast turnaround times',
        'Experienced technicians',
        'Warranty on repairs',
        'Upfront pricing',
        'On-site or remote support available',
        'Prevention advice to avoid future issues',
      ],
      process: [
        'Initial diagnosis and problem assessment',
        'Detailed quote and repair plan',
        'Repair or component replacement',
        'Testing and quality assurance',
        'Data restoration if needed',
        'System optimization and handover',
      ],
    },
    {
      icon: Headset,
      title: 'Business IT Support',
      description: 'Ongoing support for your business',
      features: [
        'Monthly maintenance plans',
        'Priority support access',
        'Proactive monitoring',
        'On-site and remote assistance',
      ],
      detailedFeatures: [
        'Regular system maintenance and updates',
        'Network monitoring and management',
        'Email and server management',
        'Backup and disaster recovery planning',
        'Security updates and patch management',
        'IT consulting and strategic planning',
      ],
      benefits: [
        'Minimize downtime and productivity loss',
        'Predictable monthly IT costs',
        'Access to experienced IT team',
        'Proactive issue prevention',
        'Scalable solutions as you grow',
        'Focus on your business, not IT issues',
      ],
      process: [
        'IT infrastructure assessment',
        'Customized support plan development',
        'Implementation of monitoring tools',
        'Regular maintenance scheduling',
        'Ongoing support and optimization',
        'Quarterly reviews and planning',
      ],
    },
    {
      icon: Cable,
      title: 'Network Cabling',
      description: 'Professional structured cabling',
      features: [
        'Cat5e/Cat6 cable installation',
        'Ethernet port setup',
        'Cable management',
        'Testing and certification',
      ],
      detailedFeatures: [
        'Cat5e/Cat6/Cat6a cable installation',
        'Fiber optic cabling',
        'Patch panel and rack installation',
        'Wall plate and socket installation',
        'Cable labeling and documentation',
        'Testing and certification with reports',
      ],
      benefits: [
        'Reliable high-speed connections',
        'Future-proof infrastructure',
        'Clean and organized installation',
        'Reduced network issues',
        'Increased property value',
        'Compliance with industry standards',
      ],
      process: [
        'Site survey and cabling plan',
        'Cable routing and pathway design',
        'Professional installation and termination',
        'Patch panel and rack setup',
        'Testing and certification',
        'Documentation and handover',
      ],
    },
    {
      icon: ScreenShare,
      title: 'Remote Support',
      description: 'Expert assistance from anywhere',
      features: [
        'Instant remote troubleshooting',
        'Software installation and updates',
        'Performance optimization',
        'Real-time problem resolution',
      ],
      detailedFeatures: [
        'Secure remote desktop connection',
        'Software installation and configuration',
        'System updates and patch management',
        'Performance tuning and optimization',
        'Virus and malware removal',
        'Technical training and guidance',
      ],
      benefits: [
        'Fast problem resolution without waiting',
        'No travel time or costs',
        'Access to expert help anytime',
        'Secure encrypted connections',
        'Perfect for urgent issues',
        'Cost-effective IT support',
      ],
      process: [
        'Contact us via phone or email',
        'Download secure remote access software',
        'Technician connects to your computer',
        'Issue diagnosed and resolved remotely',
        'Testing and verification',
        'Follow-up support if needed',
      ],
    },
    {
      icon: Bell,
      title: 'Alarm System Installation',
      description: 'Comprehensive security alarm solutions',
      features: [
        'Motion sensor installation',
        'Door and window sensors',
        'Professional monitoring setup',
        'Mobile alerts and notifications',
      ],
      detailedFeatures: [
        'Advanced motion detection sensors',
        'Perimeter protection with door/window sensors',
        'Glass break detectors',
        'Control panel installation and programming',
        'Mobile app configuration',
        'Integration with existing security systems',
      ],
      benefits: [
        'Enhanced property security',
        'Immediate alerts to intrusions',
        'Lower insurance premiums',
        'Peace of mind when away',
        'Professional monitoring options',
        'Deterrent to burglars',
      ],
      process: [
        'Security assessment and consultation',
        'Custom system design for your property',
        'Professional sensor installation',
        'Control panel setup and configuration',
        'Mobile app setup and testing',
        'Training on system operation',
      ],
    },
    {
      icon: DoorOpen,
      title: 'Door Access Control',
      description: 'Modern keyless entry systems',
      features: [
        'Keycard and fob systems',
        'Biometric access control',
        'Remote access management',
        'Entry logging and reporting',
      ],
      detailedFeatures: [
        'Electronic lock installation',
        'Keycard, fob, or biometric readers',
        'Access control software setup',
        'User permission management',
        'Time-based access scheduling',
        'Entry and exit logging system',
      ],
      benefits: [
        'Enhanced security and access control',
        'No need for physical keys',
        'Track who enters and exits',
        'Easily add or remove access',
        'Perfect for businesses and apartments',
        'Integration with security systems',
      ],
      process: [
        'Access control needs assessment',
        'System design and equipment selection',
        'Electronic lock installation',
        'Reader and control panel setup',
        'Software configuration and testing',
        'User training and documentation',
      ],
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onLearnMore={() => setSelectedService(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 px-8 rounded-t-2xl">
                <div className="text-center">
                  {(() => {
                    const Service = services[selectedService];
                    const Icon = Service.icon;
                    return (
                      <>
                        <Icon size={64} className="mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-4">{Service.title}</h2>
                        <p className="text-xl text-blue-100">{Service.description}</p>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className="p-8">
                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose This Service?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services[selectedService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <span className="text-green-500 flex-shrink-0 mt-1">✓</span>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">What's Included</h3>
                  <ul className="space-y-3">
                    {services[selectedService].detailedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 pt-1">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Process</h3>
                  <div className="space-y-6">
                    {services[selectedService].process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          {index < services[selectedService].process.length - 1 && (
                            <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <a
                    href="#book"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Book This Service
                  </a>
                  <a
                    href="#quote"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
