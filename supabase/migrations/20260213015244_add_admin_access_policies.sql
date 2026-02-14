/*
  # Add Admin Access Policies

  1. Security Changes
    - Add policies to allow authenticated admin users to view all bookings
    - Add policies to allow authenticated admin users to view all quotes
    - Add policies to allow authenticated admin users to update booking status
    - Add policies to allow authenticated admin users to update quote status
    - These policies enable the admin dashboard functionality
  
  2. Important Notes
    - Only authenticated users (logged in admins) can access this data
    - Public users can still insert new bookings and quotes (existing policies)
    - Admins need full read and update access to manage requests
*/

-- Policies for service_bookings (admin access)
CREATE POLICY "Authenticated users can view all bookings"
  ON service_bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update booking status"
  ON service_bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for quote_requests (admin access)
CREATE POLICY "Authenticated users can view all quotes"
  ON quote_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update quote status"
  ON quote_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
