import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingForm from './components/BookingForm';
import QuoteForm from './components/QuoteForm';
import ContactSection from './components/ContactSection';
import PaymentSection from './components/PaymentSection';
import ContactButtons from './components/ContactButtons';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/admin/DashboardPage';
import BookingsPage from './pages/admin/BookingsPage';
import QuotesPage from './pages/admin/QuotesPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <WhyChooseUs />
        <PricingSection />
        <TestimonialsSection />
        <BookingForm />
        <QuoteForm />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactButtons />
    </div>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!loading && !user && !redirecting) {
      setRedirecting(true);
      window.location.href = '/admin/login';
    }
  }, [user, loading, redirecting]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState;
    };
  }, []);

  if (currentPath === '/admin/login') {
    return <LoginPage />;
  }

  if (currentPath === '/admin/signup') {
    return <SignupPage />;
  }

  if (currentPath === '/admin') {
    return (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    );
  }

  if (currentPath === '/admin/bookings') {
    return (
      <ProtectedRoute>
        <BookingsPage />
      </ProtectedRoute>
    );
  }

  if (currentPath === '/admin/quotes') {
    return (
      <ProtectedRoute>
        <QuotesPage />
      </ProtectedRoute>
    );
  }

  return <HomePage />;
}

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
