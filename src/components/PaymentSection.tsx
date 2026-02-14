import { CreditCard, Banknote, Smartphone } from 'lucide-react';

export default function PaymentSection() {
  return (
    <section id="payment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment Options</h2>
            <p className="text-xl text-gray-600">
              Convenient and secure payment methods for your services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Banknote className="text-blue-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Bank Transfer</h3>
              <p className="text-gray-600 mb-6 text-center">
                Direct bank transfer to our Westpac account
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                    <p className="font-semibold text-gray-900">Westpac Bank Fiji</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="font-semibold text-gray-900 text-lg">9806733227</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Name</p>
                    <p className="font-semibold text-gray-900">12 Net Solution</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Please use your invoice number as reference
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Mpaisa</h3>
              <p className="text-gray-600 mb-6 text-center">
                Quick and convenient mobile money payment
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                    <p className="font-semibold text-gray-900">Vodafone Mpaisa</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Mpaisa Number</p>
                    <p className="font-semibold text-gray-900 text-lg">8463328</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Name</p>
                    <p className="font-semibold text-gray-900">12 Net Solution</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Send payment and SMS confirmation to us
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
            <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
            <p className="text-gray-700">
              50% deposit required for large projects. Balance payable upon service completion.
              All prices in Fijian Dollars (FJD). Invoice will be provided for all services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
