/*
  # Restore Validated Insert Policies

  ## Overview
  Restores proper validation-based INSERT policies for both quote_requests
  and service_bookings tables. Form submissions now go through edge functions
  using the service_role key (which bypasses RLS), so these policies serve
  as a defense-in-depth measure for any direct database access.

  ## Changes
  - Drop the temporary simple anon INSERT policy on quote_requests
  - Create validated INSERT policies targeting anon and authenticated roles
  - Both tables now have consistent validation in RLS policies
*/

DROP POLICY IF EXISTS "Anon insert quotes" ON quote_requests;

CREATE POLICY "Validated anon quote submissions"
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