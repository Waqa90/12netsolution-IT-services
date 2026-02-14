import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingData {
  customer_name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  address: string;
  message: string;
}

function validateBookingData(data: BookingData): string | null {
  if (!data.customer_name || data.customer_name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!data.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
    return "Valid email is required";
  }
  if (!data.phone || data.phone.trim().length < 7) {
    return "Valid phone number is required";
  }
  if (!data.service_type || data.service_type.trim().length < 2) {
    return "Service type is required";
  }
  if (!data.address || data.address.trim().length < 5) {
    return "Service address is required";
  }
  if (!data.preferred_date) {
    return "Preferred date is required";
  }
  if (!data.preferred_time) {
    return "Preferred time is required";
  }
  return null;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const bookingData: BookingData = await req.json();

    const validationError = validateBookingData(bookingData);
    if (validationError) {
      return new Response(
        JSON.stringify({ success: false, error: validationError }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("service_bookings")
      .insert([{
        customer_name: bookingData.customer_name.trim(),
        email: bookingData.email.trim(),
        phone: bookingData.phone.trim(),
        service_type: bookingData.service_type,
        preferred_date: bookingData.preferred_date,
        preferred_time: bookingData.preferred_time,
        address: bookingData.address.trim(),
        message: bookingData.message || "",
        status: "pending",
      }]);

    if (dbError) {
      console.error("Database insert error:", dbError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save booking" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailHtml = `
          <h2>New Service Booking Request</h2>
          <p><strong>Customer Name:</strong> ${bookingData.customer_name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          <p><strong>Service Type:</strong> ${bookingData.service_type}</p>
          <p><strong>Preferred Date:</strong> ${bookingData.preferred_date}</p>
          <p><strong>Preferred Time:</strong> ${bookingData.preferred_time}</p>
          <p><strong>Service Address:</strong> ${bookingData.address}</p>
          <p><strong>Additional Details:</strong></p>
          <p>${bookingData.message || "No additional details provided"}</p>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "NetSolution IT Services <bookings@netsolution.com>",
            to: ["info@netsolution.com"],
            subject: `New Service Booking: ${bookingData.service_type}`,
            html: emailHtml,
          }),
        });
      } catch (emailError) {
        console.warn("Email notification failed:", emailError);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing booking:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
