import { MessageCircle, CreditCard } from 'lucide-react';

export default function ContactButtons() {
  const whatsappNumber = '6798463328';
  const whatsappMessage = encodeURIComponent('Hi, I would like to inquire about your IT services.');

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>

      <a
        href="#payment"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
        title="Make Payment"
      >
        <CreditCard size={24} />
      </a>
    </div>
  );
}
