/*
  # Fix Anonymous Insert Policies for Public Forms

  ## Overview
  The quote request and booking forms are public-facing and must allow
  unauthenticated (anonymous) visitors to submit data. The previous policies
  used the default TO PUBLIC target which does not correctly resolve for
  the anon role in Supabase. This migration recreates the INSERT policies
  with explicit TO anon, authenticated targeting.

  ## Changes

  ### quote_requests table
  - Drop existing "Validated quote submissions" INSERT policy
  - Recreate with explicit TO anon, authenticated
  - Same validation rules preserved

  ### service_bookings table
  - Drop existing "Validated booking submissions" INSERT policy
  - Recreate with explicit TO anon, authenticated
  - Same validation rules preserved

  ## Security
  - Validation checks remain unchanged (name, email, phone, etc.)
  - Only INSERT is allowed for anonymous users
  - SELECT/UPDATE remain restricted to authenticated users only
*/

-- Fix quote_requests INSERT policy
DROP POLICY IF EXISTS "Validated quote submissions" ON quote_requests;

CREATE POLICY "Anon and auth can submit quotes"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    customer_name IS NOT NULL AND
    length(trim(customer_name)) >= 2 AND
    length(trim(customer_name)) <= 100 AND
    email IS NOT NULL AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    phone IS NOT NULL AND
    length(trim(phone)) >= 7 AND
    length(trim(phone)) <= 20 AND
    service_type IS NOT NULL AND
    length(trim(service_type)) >= 2 AND
    description IS NOT NULL AND
    length(trim(description)) >= 10 AND
    length(trim(description)) <= 2000 AND
    status = 'pending'
  );

-- Fix service_bookings INSERT policy
DROP POLICY IF EXISTS "Validated booking submissions" ON service_bookings;

CREATE POLICY "Anon and auth can submit bookings"
  ON service_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    customer_name IS NOT NULL AND
    length(trim(customer_name)) >= 2 AND
    length(trim(customer_name)) <= 100 AND
    email IS NOT NULL AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    phone IS NOT NULL AND
    length(trim(phone)) >= 7 AND
    length(trim(phone)) <= 20 AND
    service_type IS NOT NULL AND
    length(trim(service_type)) >= 2 AND
    address IS NOT NULL AND
    length(trim(address)) >= 5 AND
    preferred_date IS NOT NULL AND
    preferred_time IS NOT NULL AND
    status = 'pending'
  );