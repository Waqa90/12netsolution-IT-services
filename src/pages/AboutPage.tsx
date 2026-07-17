import { ArrowRight, BadgeCheck, HeartHandshake, Eye, ShieldCheck, Users, Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactButtons from '../components/ContactButtons';

export default function AboutPage() {
  const values = [
    {
      icon: BadgeCheck,
      title: 'Truthfulness',
      description: "We pledge absolute honesty in our diagnoses, pricing, and advice. We will never recommend a service or part you don't genuinely need.",
    },
    {
      icon: HeartHandshake,
      title: 'Trust',
      description: 'We handle your devices, data, and properties with the utmost respect. Building long-term, reliable relationships with our clients is our top priority.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden fees, no confusing jargon. From our flat-rate diagnosis fees to our monthly support plans, you will always know exactly what you are getting.',
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: 'A Promise to Back You Up',
      description: "If something isn't right, we will return to fix it. Our job isn't done until your system is running perfectly.",
    },
    {
      icon: Users,
      title: 'Local Hearts, Certified Minds',
      description: 'We are a local Nadi team combining deep community roots with certified IT expertise.',
    },
    {
      icon: Scale,
      title: 'Honest & Fair Pricing',
      description: 'Grounded in our values, we ensure our pricing is always fair, visible, and competitive.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white overflow-hidden py-20 md:py-28">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-300">
                Your trusted local partner for fast, reliable, and modern IT services in Nadi.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Based in the heart of Nadi, 12Net Solution is your trusted local partner for fast, reliable, and modern IT services. From home WiFi setups and Starlink installations to advanced business network cabling and CCTV security, we are dedicated to keeping our Nadi community connected and secure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team is deeply committed to solving your technical challenges, no matter how complex. More importantly, we commit to always back you up whenever you need assistance. When you work with us, you are never left to figure things out alone.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Founder & Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded right here in Nadi, our journey began with a clear vision: to provide the local community and businesses with premium, stress-free IT support that they can actually depend on. Our founder established 12Net Solution on the belief that technology should empower people, not frustrate them. By offering door-to-door repairs, rapid remote assistance, and expert installations, we have built a local team that understands the unique needs of Nadi's residents and businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built on Faith & Core Values</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At the very core of 12Net Solution is a foundation built on the Word of the Kingdom of God. We believe that business should be a reflection of higher principles. Because of this, our entire service system is centered around three non-negotiable pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-brand-100 p-4 rounded-full mb-4">
                    <value.icon className="text-brand-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Nadi Chooses 12Net Solution</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white hover:shadow-lg transition-all"
                >
                  <div className="bg-brand-100 p-4 rounded-full mb-4">
                    <reason.icon className="text-brand-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to experience IT support built on trust?
              </h2>
              <p className="text-xl text-brand-100 mb-8">
                Whether you need an urgent repair, a network upgrade, or business IT support, we are here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#book"
                  className="bg-white hover:bg-gray-100 text-brand-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  Book a Service Now
                  <ArrowRight size={20} />
                </a>
                <a
                  href="tel:+6798463328"
                  className="bg-brand-800 hover:bg-brand-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  Call +679 846 3328
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}
