import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  customer_name: string;
  customer_role: string;
  rating: number;
  comment: string;
  service_type: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(6);

    if (data) {
      setTestimonials(data);
    } else {
      setTestimonials(defaultTestimonials);
    }
  };

  const defaultTestimonials = [
    {
      id: '1',
      customer_name: 'Rajesh Kumar',
      customer_role: 'Small Business Owner',
      rating: 5,
      comment: '12Net Solution installed our Starlink internet and the service has been exceptional. Lightning fast and reliable!',
      service_type: 'Starlink Installation',
    },
    {
      id: '2',
      customer_name: 'Sarah Thompson',
      customer_role: 'Homeowner',
      rating: 5,
      comment: 'They set up our home WiFi network perfectly. Every room has strong signal now. Highly professional team!',
      service_type: 'WiFi Network Setup',
    },
    {
      id: '3',
      customer_name: 'David Chen',
      customer_role: 'Retail Store Manager',
      rating: 5,
      comment: 'The CCTV system they installed gives us peace of mind. Can check our store from anywhere. Great work!',
      service_type: 'CCTV Installation',
    },
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.customer_name}
              role={testimonial.customer_role}
              rating={testimonial.rating}
              comment={testimonial.comment}
              service={testimonial.service_type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
