# 12Net Solution - IT Services Website

A professional, production-ready website for 12Net Solution, an IT services company in Fiji.

## Features

### Complete Service Offerings
- Starlink Installation
- WiFi Network Setup & Optimization
- CCTV Security Systems
- Computer Repair & Troubleshooting
- Business IT Support Plans
- Network Cabling & Office Setup

### Key Functionality
- **Booking System**: Customers can schedule services with date/time selection
- **Quote Requests**: Detailed form for custom project quotes
- **Pricing Plans**: Three tiers (Home Support, Business Support, Emergency)
- **Testimonials**: Customer reviews with star ratings
- **Payment Options**: Online payment and bank transfer information
- **WhatsApp Integration**: Floating WhatsApp button for instant contact
- **Mobile Optimized**: Fully responsive design for all devices

### Database Integration
The website uses Supabase for data persistence:
- `testimonials` - Customer reviews and ratings
- `service_bookings` - Service appointment requests
- `quote_requests` - Custom quote submissions

All tables have Row Level Security (RLS) enabled for data protection.

## Customization

### Contact Information
Update the following in the code:
- Phone number: Search for `+679 XXX XXXX` and replace
- Email: Search for `info@12netsolution.com` and replace
- WhatsApp number: Update in `src/components/ContactButtons.tsx`

### Colors
The site uses a professional blue theme:
- Primary: `blue-600` (#2563eb)
- Dark: `slate-900` (#0f172a)
- Accent: Various blue shades

### Payment Integration
The payment section is set up with placeholders. To enable real payments:
1. Integrate PayPal or Stripe
2. Update the payment button handlers in `src/components/PaymentSection.tsx`

## Technology Stack
- React 18
- TypeScript
- Tailwind CSS
- Supabase (Database)
- Vite (Build tool)
- Lucide React (Icons)

## Getting Started

The development server starts automatically. The website is fully functional and ready for deployment.

## Database Setup

The database schema is already created with the following tables:
- testimonials (with 6 sample reviews)
- service_bookings
- quote_requests

All forms are connected and will save data to the database.
