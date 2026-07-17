import { useEffect, useState, lazy, Suspense } from 'react';
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
import LocationSection from './components/LocationSection';
import ContactButtons from './components/ContactButtons';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const BookingsPage = lazy(() => import('./pages/admin/BookingsPage'));
const QuotesPage = lazy(() => import('./pages/admin/QuotesPage'));

function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const timeout = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timeout);
    }
  }, []);

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
        <ContactSection />
        <LocationSection />
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

  if (currentPath === '/about') {
    return (
      <Suspense fallback={<PageLoading />}>
        <AboutPage />
      </Suspense>
    );
  }

  if (currentPath === '/terms') {
    return (
      <Suspense fallback={<PageLoading />}>
        <TermsPage />
      </Suspense>
    );
  }

  if (currentPath === '/admin/login') {
    return (
      <Suspense fallback={<PageLoading />}>
        <LoginPage />
      </Suspense>
    );
  }

  if (currentPath === '/admin/signup') {
    return (
      <Suspense fallback={<PageLoading />}>
        <SignupPage />
      </Suspense>
    );
  }

  if (currentPath === '/admin') {
    return (
      <Suspense fallback={<PageLoading />}>
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      </Suspense>
    );
  }

  if (currentPath === '/admin/bookings') {
    return (
      <Suspense fallback={<PageLoading />}>
        <ProtectedRoute>
          <BookingsPage />
        </ProtectedRoute>
      </Suspense>
    );
  }

  if (currentPath === '/admin/quotes') {
    return (
      <Suspense fallback={<PageLoading />}>
        <ProtectedRoute>
          <QuotesPage />
        </ProtectedRoute>
      </Suspense>
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
