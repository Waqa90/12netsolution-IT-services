import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactButtons from '../components/ContactButtons';
import { usePageMeta } from '../hooks/usePageMeta';

export default function TermsPage() {
  usePageMeta(
    'Terms of Service - 12Net Solution',
    'Terms of service for 12Net Solution IT support plans, bookings, and repairs in Nadi, Fiji, including billing, cancellations, warranty, and fair-use policies.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white overflow-hidden py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300">
                Please read these terms before booking a service or subscribing to a support plan with 12Net Solution.
              </p>
              <p className="text-sm text-gray-400 mt-4">Last updated: July 17, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By booking a service, subscribing to a support plan, or otherwise engaging 12Net Solution
                  ("we", "us", "our"), you ("client", "you") agree to these Terms of Service. If you do not
                  agree, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Service Plans & Billing</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>Monthly plans (Home IT Support, Business Care Plan, Small Business Support) are billed in advance on the same date each month.</li>
                  <li>The Business Care Plan may alternatively be paid annually at FJD 180/year.</li>
                  <li>Payment is accepted via bank transfer or cash. Invoices are due within 7 days of issue unless otherwise agreed.</li>
                  <li>Plans automatically renew each billing cycle unless cancelled (see Section 6).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Scope of Work & Fair Use</h2>
                <p className="leading-relaxed mb-3">
                  Each plan includes a defined amount of support, listed on our Pricing page. To keep our
                  service sustainable and our response times fast for everyone:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li><span className="font-medium text-gray-900">Business Hours</span> are Monday-Friday, 8:00 AM - 5:00 PM (excluding Fijian public holidays).</li>
                  <li><span className="font-medium text-gray-900">Remote support hours</span> on Small Business Support are capped at 15 hours per month. Additional hours are billed at your plan's discounted hourly rate.</li>
                  <li><span className="font-medium text-gray-900">On-site visits</span> beyond what's included in your plan are billed at your plan's discounted call-out rate.</li>
                  <li><span className="font-medium text-gray-900">Business Care Plan</span> covers up to 3 devices/users. Businesses with more devices should purchase an additional plan or upgrade to Small Business Support.</li>
                  <li>Work outside your plan's scope (e.g. new installations, major projects) is quoted and billed separately.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Emergency & After-Hours Call-Outs</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>Standard call-out rate: FJD 120/visit, Monday-Friday, 8:00 AM - 5:00 PM.</li>
                  <li>After-hours rate: FJD 180/visit, applies to evenings, weekends, and Fijian public holidays.</li>
                  <li>Small Business Support's free emergency call-outs apply during Business Hours only; after-hours emergency call-outs are billed at the after-hours rate.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Payments & Late Fees</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>Invoices unpaid after 7 days may incur a 5% late fee.</li>
                  <li>We reserve the right to pause services on overdue accounts until payment is received.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Cancellations & Refunds</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>Monthly plans may be cancelled anytime with 7 days' written notice (email or WhatsApp). No refund is given for the remainder of a partially used billing month.</li>
                  <li>The annual Business Care Plan (FJD 180/year) may be cancelled within 14 days of purchase for a full refund, provided no services have been used. After 14 days, it is non-refundable but may be cancelled to prevent renewal.</li>
                  <li>Emergency Call-Out and one-off services are paid per visit and are non-refundable once work has commenced.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Client Responsibilities</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>You confirm you are the legal owner of any device submitted for repair, unlock, or service, or have the owner's explicit permission. Unlock services (SIM/carrier, iCloud, passcode) require proof of ownership.</li>
                  <li>You are responsible for backing up your own data before any repair, installation, or unlock service. While we take reasonable care, 12Net Solution is not liable for data loss.</li>
                  <li>You agree to provide safe, reasonable access to your property/devices and accurate information about the issue.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Warranty & Liability</h2>
                <ul className="list-disc list-outside pl-5 space-y-2 leading-relaxed">
                  <li>Repairs carried out by 12Net Solution carry a 30-day warranty on our labor. This does not cover new issues unrelated to the original repair, or damage caused by misuse after service.</li>
                  <li>Third-party hardware and software are covered by the relevant manufacturer's warranty, not by 12Net Solution.</li>
                  <li>To the fullest extent permitted by Fijian law, 12Net Solution's liability for any claim is limited to the amount paid for the service giving rise to the claim.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">9. Changes to These Terms</h2>
                <p className="leading-relaxed">
                  We may update these Terms from time to time. Continued use of our services after changes
                  take effect constitutes acceptance of the updated Terms. Active subscribers will be
                  notified of material changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">10. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms are governed by the laws of the Republic of Fiji.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
                <p className="leading-relaxed">
                  Questions about these Terms? Contact us at{' '}
                  <a href="mailto:waqa@12netsolution.com" className="text-brand-600 hover:text-brand-700 underline">
                    waqa@12netsolution.com
                  </a>{' '}
                  or{' '}
                  <a href="tel:+6798463328" className="text-brand-600 hover:text-brand-700 underline">
                    +679 846 3328
                  </a>.
                </p>
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
