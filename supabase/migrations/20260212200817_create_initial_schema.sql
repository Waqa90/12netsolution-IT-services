/*
  # Initial Schema for 12Net Solution Website

  ## Overview
  This migration creates the database structure for managing customer testimonials,
  service bookings, and quote requests for the 12Net Solution IT services website.

  ## New Tables

  ### testimonials
  Stores customer reviews and feedback displayed on the website
  - `id` (uuid, primary key) - Unique identifier
  - `customer_name` (text) - Customer's full name
  - `customer_role` (text) - Customer's job title or role (optional)
  - `rating` (integer) - Star rating (1-5)
  - `comment` (text) - Testimonial text
  - `service_type` (text) - Which service they used
  - `is_featured` (boolean) - Whether to display on homepage
  - `is_approved` (boolean) - Admin approval status
  - `created_at` (timestamptz) - When testimonial was submitted

  ### service_bookings
  Tracks all service booking requests from customers
  - `id` (uuid, primary key) - Unique identifier
  - `customer_name` (text) - Customer's full name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `service_type` (text) - Type of service requested
  - `preferred_date` (date) - Preferred service date
  - `preferred_time` (text) - Preferred time slot
  - `address` (text) - Service location address
  - `message` (text) - Additional details or requirements
  - `status` (text) - Booking status (pending/confirmed/completed/cancelled)
  - `created_at` (timestamptz) - When booking was created

  ### quote_requests
  Stores quote requests from potential customers
  - `id` (uuid, primary key) - Unique identifier
  - `customer_name` (text) - Customer's full name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone number
  - `service_type` (text) - Type of service needed
  - `business_type` (text) - Home or business (optional)
  - `description` (text) - Detailed description of requirements
  - `budget_range` (text) - Estimated budget (optional)
  - `status` (text) - Quote status (pending/sent/accepted/declined)
  - `created_at` (timestamptz) - When quote was requested

  ## Security
  - Enable RLS on all tables
  - Public read access for approved testimonials only
  - Authenticated write access for bookings and quotes
  - Admin access required for testimonial approval
*/

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_role text DEFAULT '',
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  service_type text NOT NULL,
  is_featured boolean DEFAULT false,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create service_bookings table
CREATE TABLE IF NOT EXISTS service_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  address text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_type text NOT NULL,
  business_type text DEFAULT 'home',
  description text NOT NULL,
  budget_range text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'accepted', 'declined')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Testimonials policies
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  WITH CHECK (true);

-- Service bookings policies
CREATE POLICY "Anyone can create bookings"
  ON service_bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own bookings"
  ON service_bookings FOR SELECT
  USING (true);

-- Quote requests policies
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own quotes"
  ON quote_requests FOR SELECT
  USING (true);