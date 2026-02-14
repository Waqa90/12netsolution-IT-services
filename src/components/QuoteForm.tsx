import { useState, FormEvent } from 'react';
import { FileText } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    service_type: '',
    business_type: 'home',
    description: '',
    budget_range: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Starlink Installation',
    'WiFi Network Setup',
    'CCTV Security System',
    'Computer Repair',
    'Business IT Support',
    'Network Cabling',
    'Remote Support',
    'Alarm System Installation',
    'Door Access Control',
    'Custom IT Project',
  ];

  const budgetRanges = [
    'Under FJD 500',
    'FJD 500 - 1,000',
    'FJD 1,000 - 2,500',
    'FJD 2,500 - 5,000',
    'Over FJD 5,000',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-quote-email`;
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit quote request');
      }

      setSubmitStatus('success');
      setFormData({
        customer_name: '',
        email: '',
        phone: '',
        service_type: '',
        business_type: 'home',
        description: '',
        budget_range: '',
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit quote request');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll provide a detailed quote
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.customer_name}
                  onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="+679 846 3328"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  required
                  value={formData.service_type}
                  onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type *
                </label>
                <select
                  required
                  value={formData.business_type}
                  onChange={(e) => setFormData({ ...formData, business_type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="home">Home</option>
                  <option value="small_business">Small Business</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget_range}
                  onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FileText size={16} className="inline mr-1" />
                Project Description * (minimum 10 characters)
              </label>
              <textarea
                required
                minLength={10}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                rows={6}
                placeholder="Please describe your project requirements in detail. Include information about the scope, timeline, and any specific needs..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.description.length}/10 characters minimum
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Quote request submitted successfully! We'll review your requirements and send you a detailed quote within 24-48 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {errorMessage || 'There was an error submitting your quote request. Please try again or contact us directly.'}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
