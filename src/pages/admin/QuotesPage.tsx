import { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { supabase } from '../../lib/supabase';
import { FileText, Mail, Phone, Building, DollarSign, MessageSquare } from 'lucide-react';

interface Quote {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  service_type: string;
  business_type: string;
  description: string;
  budget_range: string;
  status: 'pending' | 'sent' | 'accepted' | 'declined';
  created_at: string;
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuotes(data || []);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Quote['status']) => {
    try {
      const { error } = await supabase
        .from('quote_requests')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setQuotes(quotes.map(q => q.id === id ? { ...q, status: newStatus } : q));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredQuotes = filter === 'all'
    ? quotes
    : quotes.filter(q => q.status === filter);

  const statusColors = {
    pending: 'bg-orange-100 text-orange-700',
    sent: 'bg-blue-100 text-blue-700',
    accepted: 'bg-green-100 text-green-700',
    declined: 'bg-red-100 text-red-700',
  };

  return (
    <AdminLayout currentPage="quotes">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Quote Requests</h2>
            <p className="text-slate-600 mt-1">Manage all quote requests</p>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Quotes</option>
            <option value="pending">Pending</option>
            <option value="sent">Sent</option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : filteredQuotes.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center">
            <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No quotes found</h3>
            <p className="text-slate-600">
              {filter === 'all' ? 'No quote requests have been submitted yet.' : `No ${filter} quotes found.`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredQuotes.map((quote) => (
              <div key={quote.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">{quote.customer_name}</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Service: <span className="font-medium">{quote.service_type}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[quote.status]}`}>
                        {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Mail className="w-4 h-4 mr-2 text-slate-400" />
                        {quote.email}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Phone className="w-4 h-4 mr-2 text-slate-400" />
                        {quote.phone}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Building className="w-4 h-4 mr-2 text-slate-400" />
                        {quote.business_type === 'home' ? 'Home' : 'Business'}
                      </div>
                      {quote.budget_range && (
                        <div className="flex items-center text-sm text-slate-600">
                          <DollarSign className="w-4 h-4 mr-2 text-slate-400" />
                          {quote.budget_range}
                        </div>
                      )}
                      <div className="flex items-start text-sm text-slate-600 md:col-span-2">
                        <MessageSquare className="w-4 h-4 mr-2 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span>{quote.description}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500">
                      Submitted: {new Date(quote.created_at).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <button
                      onClick={() => updateStatus(quote.id, 'sent')}
                      disabled={quote.status === 'sent'}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Mark Sent
                    </button>
                    <button
                      onClick={() => updateStatus(quote.id, 'accepted')}
                      disabled={quote.status === 'accepted'}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(quote.id, 'declined')}
                      disabled={quote.status === 'declined'}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
